import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import clientID from './googleClient';

function LoginButton(props) {
    
    const LoginSuccess = (res) => {
        console.log(res)
        var basicProfile = res.profileObj;
        let user = {
            ...basicProfile,
            favourites: [],
            soldItems: [],
            _id: '',
            notifications: [],
            orders: []
        }
        props.authorise(user)
        axios.post('/api/googlelogin', {
            googleToken: res.tokenId
        })
            .then(res => {
                const { favourites, soldItems, _id, notifications, mobile, orders } = res.data;
                user.favourites = favourites;
                user.soldItems = soldItems;
                user.notifications = notifications;
                user._id = _id;
                user.mobile = mobile
                user.orders = orders
                props.Login(user);
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
                onAutoLoadFinished={() => props.loading(false)}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (fullProfile) => {
            dispatch({ type: 'SET_AUTH_FULL', payload: fullProfile })
        },
        authorise: (basicProfile) =>{
            dispatch({type: 'SET_AUTH_BASIC', payload: basicProfile })
        },
        loading: (value) => {
            dispatch({type: 'SET_LOADING_FALSE', payload: value})
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginButton);


