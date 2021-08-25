import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import '../Combined.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NotifButton(props) {
    if (props.notifications) {
        return (
            <img src="/notifications_active.svg" alt="notification-icon" className="NotifButton" />
        )
    } else {
        return (
            <img src="/notifications_inactive.svg" alt="notification-icon" className="NotifButton" />
        )
    }
}
function ProfileButton(props) {
    const handleBell = () => {
        if (props.notifications) {
            let newNotifs = [];
            for (let i = 0; i < props.user.notifications.length; i++) {
                let newNotif = {
                    ...props.user.notifications[i],
                    read: true
                };
                newNotifs.push(newNotif);
            }
            const newUser = {
                ...props.user,
                notifications: newNotifs
            }
            props.Update(newUser);
            axios.put(`/api/user/notifbell/${props.user._id}`)
                .then(res => {
                    console.log(res);
                })
        }
    }
    if (props.Auth) {
        return (<>
            <div className="profile d-flex justify-content-between ">
                <Link onClick={handleBell} to="/notifications" className='m-auto mx-2' id="notification-bell" >
                    <NotifButton notifications={props.notifications} user={props.user} />
                </Link>
                {props.user.name ? <div className='mt-auto mx-3' style={{ color: 'white', margin: 'auto 0' }} >  Hi {props.user.name.slice(0, props.user.name.indexOf(' '))} </div> : null}
                <div className="dropdown dropstart" >
                    <button className="btn btn-transparent p-0 dropdown-toggle" style={{ borderRadius: '100%' }} type="button" id="dropdownMenuButton2 custom-profile-button" data-bs-toggle="dropdown" aria-expanded="false">

                        <img src={props.user.profilePic} alt="User icon" className="d-inline-block align-text-top" id="profile-image" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/favourites">Favourites</Link></li>
                        <li><Link className="dropdown-item" to="/sold-items">Sold Items</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><LogoutButton /></li>
                    </ul>
                </div>

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
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

const mapStateToProps = (state) => {
    const flag = () => {
        for (let i = 0; i < state.user.notifications.length; i++) {
            if (state.user.notifications[i].read === false) {
                return true;
            }
        };
        return false;
    }
    return {
        Auth: state.Authorised,
        user: state.user,
        notifications: flag()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton);