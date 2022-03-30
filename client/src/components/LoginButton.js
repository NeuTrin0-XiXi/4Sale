import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import clientID from '../googleClient';

function LoginButton(props) {

    const LoginSuccess = (res) => {
        var basicProfile = res.profileObj;
        let user = {
            ...basicProfile,
            favourites: [],
            ads: [],
            _id: '',
            notifications: [],
            orders: []
        }
        props.login({ user: user, loading: true })
        axios.post('/api/googlelogin', {
            googleToken: res.tokenId
        })
            .then(res => {
                const { favourites, ads, _id, notifications, mobile, orders } = res.data.user;
                const { accessToken } = res.data;

                user.favourites = favourites;
                user.ads = ads;
                user.notifications = notifications;
                user._id = _id;
                user.mobile = mobile
                user.orders = orders
                props.login({ user: user, loading: false, accessToken: accessToken });
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }
    return (
        <div className='m-auto' >
            <GoogleLogin
                id="navLoginButton"
                clientId={clientID}
                buttonText="Login"
                hostedDomain={"iiti.ac.in"}
                onSuccess={LoginSuccess}
                isSignedIn={true}
                onFailure={LoginFail}
                cookiePolicy={'single_host_origin'}
                onAutoLoadFinished={() => props.loading(false)}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch({ type: 'SET_USER', payload: data })
        },
        loading: (value) => {
            dispatch({ type: 'SET_LOADING', payload: value })
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginButton);


