import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import '../Combined.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

function NotifButton(props) {
    if (props.notifications) {
        return (
            <img src="notifications_active.svg" alt="notification-icon" className="NotifButton" />
        )
    } else {
        return (
            <img src="notifications_inactive.svg" alt="notification-icon" className="NotifButton" />
        )
    }
}
function ProfileButton(props) {
    if (props.Auth) {
        return (<>
            <div className="dropdown">
                <button style={{ backgroundColor: "#333333", borderColor: "#333333" }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2 custom-profile-button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hi {props.profile.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/favourites">Favourites</Link></li>
                    <li><Link className="dropdown-item" to="/sold-items">Sold Items</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><LogoutButton /></li>
                </ul>
            </div>
            <div className="nav-item navBarItems" >
                <img src={props.profile.profilePic} alt="User icon" className="d-inline-block align-text-top" id="profile-image" />
            </div>
            <Link to="/notifications" style={{ backgroundColor: "#333333", borderColor: "#333333" }} id="notification-bell" >
                <NotifButton notifications={props.notifications}/>
            </Link>
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
    let flag = false;
    // for (const [key, value] of state.user.notifications) {
    //     if (key.read === false) {
    //         flag = true
    //     }
    // }
    return {
        Auth: state.Authorised,
        profile: state.user,
        notifications: flag
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton);