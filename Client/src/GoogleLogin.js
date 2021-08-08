import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import {connect} from 'react-redux';

function UserLogin() {
    const loginSucess=(res)=>{
        console.log(res);
        axios({
            method: "POST",
            payload: {}
        })
    };

    const loginFail=(res)=>{
        // return(
        //     // alert("Login failed");
        // );
    };

    return (
        <div>
            <GoogleLogin
                clientId="1059582039946-3rije6k0k92ertj2utffkrvdjjgdrkm0.apps.googleusercontent.com"
                buttonText="Login/Sign-up"
                onSuccess={loginSucess}
                onFailure={loginFail}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

// const mapStateToProps = (state) => ({
    
// });
// connect(mapStateToProps)
export default (UserLogin);