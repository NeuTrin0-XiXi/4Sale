import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import '../Combined.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';


function ProfileButton(props) {
    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };

    if (props.Auth) {
        return (<>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2 custom-profile-button"  data-bs-toggle="dropdown" aria-expanded="false">
                    Hi {props.profile.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item active" to="/favourites">Favourites</Link></li>
                    <li><Link className="dropdown-item" to="/sold-items">Sold Items</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><LogoutButton /></li>
                </ul>
            </div>
            <div className="nav-item navBarItems" >
                <img src={props.profile.profilePic} alt="User icon" className="d-inline-block align-text-top" id="profile-image" />
            </div>
        </>
        );
    } else {
        return (
            <LoginButton />
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (user) => {
            dispatch({ type: 'SET_AUTH_TRUE', payload: user })
        }
    }
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised,
        profile: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton);