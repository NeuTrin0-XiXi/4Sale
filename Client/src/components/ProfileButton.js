import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Combined.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';


function ProfileButton(props) {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };

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
                console.log()
                props.Login(user);
            })
            .then(() => {
                // console.log(this.props);
            })
    };

    const LoginFail = (res) => {
        console.log(res);
    }

    if (props.Auth) {
        return (<>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Hi {props.profile.name}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item active" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
            <div className="nav-item navBarItems" >
                <img src={props.profile.profilePic} alt="User icon" className="d-inline-block align-text-top" id="profile-image" />
            </div>
        </>
        );
    } else {
        return (
            // style={{ textDecoration: 'none' }}
            // className="btn btn-outline-warning " id="navLoginBtn"
            <div id="custom-login-button">
                <GoogleLogin
                    clientId="1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={LoginSuccess}
                    onFailure={LoginFail}
                    cookiePolicy={'single_host_origin'}
                    className="btn btn-outline-warning" id="custom-login-button"
                />
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ProfileButton);