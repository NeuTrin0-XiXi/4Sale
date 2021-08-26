import React from 'react';
import { connect } from 'react-redux';
import '../Combined.css';
import { GoogleLogout } from 'react-google-login';

function LogoutButton(props) {
    const Logout = () => {
        props.Logout();
    };


    return (
        <div>
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="dropdown-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                )}
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

export default connect(null, mapDispatchToProps)(LogoutButton);