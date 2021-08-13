import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { connect } from 'react-redux';
import './Combined.css';

class LoginPage extends Component {

    render() {
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
                    this.props.Login(user);
                })
                .then(() => {
                    // console.log(this.props);
                })
        }
        const LoginFail = (res) => {
            console.log(res);
        }

        return (
            <div className="col-md-6 offset-md-3 text-center">
                <GoogleLogin
                    clientId="1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={LoginSuccess}
                    onFailure={LoginFail}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (user) => {
            dispatch({ type: 'SET_AUTH_TRUE', payload: user })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
