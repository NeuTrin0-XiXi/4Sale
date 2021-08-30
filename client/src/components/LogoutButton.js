import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function LogoutButton(props) {
    const Logout = () => {
        props.Logout();
    };


    return (
        <div>
            <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="dropdown-item" onClick={renderProps.onClick} style={{color: 'rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important'}} disabled={renderProps.disabled}><FontAwesomeIcon icon={faPowerOff}/>{' '} Logout</button>
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