import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function LoginPage(){
    const LoginSuccess=(res)=>{
        console.log(res);    //Use this data for profile name and pictures
        axios.post('/api/googlelogin',{
            googleToken: res.tokenId
        })
        .then(res=>{
            console.log(res);
        })
    }
    const LoginFail=(res)=>{
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

export default LoginPage;
