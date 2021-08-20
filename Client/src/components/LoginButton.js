import React from 'react';
import { connect } from 'react-redux';
import '../Combined.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function LoginButton(props) {
    const LoginSuccess = (res) => {
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
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }
    return (
        <div id="custom-login-button">
            <GoogleLogin
                id="navLoginButton"
                clientId="1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com"
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
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginButton);


