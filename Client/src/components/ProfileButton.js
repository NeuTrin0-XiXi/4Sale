import React from 'react';
import { connect } from 'react-redux';
import '../Combined.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


function ProfileButton(props) {
    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };

    if (props.Auth) {
        return (<>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Hi {props.profile.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item active" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li></li>
                </ul>
            </div>
            <LogoutButton />
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