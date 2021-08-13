import React from 'react';
import { connect } from 'react-redux';
import '../Combined.css';
import {GoogleLogout} from 'react-google-login';

function LogoutButton(props) {
    const Logout = () => {
        // console.log(props);
        props.Logout();
    };


    return (
        <div>
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={Logout}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => {
            dispatch({ type: 'SET_AUTH_FALSE' })
        }
    }
};

export default connect(null,mapDispatchToProps)(LogoutButton);