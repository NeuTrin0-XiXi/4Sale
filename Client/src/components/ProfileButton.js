import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Combined.css';
function ProfileButton(props) {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };

    if (props.Auth) {
        return (
            <Link to="/profile" style={textColor} className="nav-link navBarItems" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                    <li className="nav-item navBarItems">
                        Hi {props.profile.name}
                    </li>
                    <li className="nav-item navBarItems">
                        <img src={props.profile.profilePic} alt="User icon" width="40" height="40" className="d-inline-block align-text-top" />
                    </li>
                </ul>
            </Link>
        );
    } else {
        return (
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="btn btn-outline-warning " id="navLoginBtn" type="LOGIN">Login</button>
            </Link>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised,
        profile: state.user
    }
}

export default connect(mapStateToProps)(ProfileButton);