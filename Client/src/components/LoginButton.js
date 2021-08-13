import React from 'react';
import { connect } from 'react-redux';
import '../Combined.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function LoginButton(props) {
    const LoginSuccess = (res) => {
        let user = {
            name: '',
            email: '',
            favourites: [],
            soldItems: [],
            _id: '',
            profilePic: ''
        }
        // console.log(res);
        console.log(res);
        var profile = res.getBasicProfile();
        user.name = profile.getName();
        user.email = profile.getEmail();
        user.profilePic = profile.getImageUrl();
        axios.post('/api/googlelogin', {
            googleToken: res.tokenId
        })
            .then(res => {
                const { favourites, soldItems, _id } = res.data;
                user.favourites = favourites;
                user.soldItems = soldItems;
                user._id = _id;
                props.Login(user);
            })
            .then(() => {
                // console.log(props);
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }
    return (
        <div id="custom-login-button">
            <GoogleLogin
                    clientId="1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={LoginSuccess}
                    isSignedIn={true}
                    onFailure={LoginFail}
                    cookiePolicy={'single_host_origin'}
                    className="btn btn-outline-warning" id="custom-login-button"
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

export default connect(null,mapDispatchToProps)(LoginButton);


