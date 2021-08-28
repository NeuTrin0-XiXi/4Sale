import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import clientID from './googleClient';
import { toast } from 'react-toastify';

function LoginButton(props) {
    const LoginSuccess = (res) => {
        props.LoginLoading();
        var profile = res.getBasicProfile();
        let user = {
            name: '',
            email: '',
            favourites: [],
            soldItems: [],
            _id: '',
            profilePic: '',
            notifications: []
        }
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.profilePic = profile.getImageUrl();
        axios.post('/api/googlelogin', {
            googleToken: res.tokenId
        })
            .then(res => {
                const { favourites, soldItems, _id, notifications, mobile } = res.data;
                user.favourites = favourites;
                user.soldItems = soldItems;
                user.notifications = notifications;
                user._id = _id;
                user.mobile = mobile
                props.Login(user);
                toast("Logged In")
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }
    return (
        <div>
            <GoogleLogin
                id="navLoginButton"
                clientId={clientID}
                buttonText="Login"
                hostedDomain={"iiti.ac.in"}
                onSuccess={LoginSuccess}
                isSignedIn={true}
                onFailure={LoginFail}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (user) => {
            dispatch({ type: 'SET_AUTH_TRUE', payload: user })
        },
        LoginLoading: () => {
            dispatch({ type: 'SET_AUTH_LOADING' })
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginButton);


