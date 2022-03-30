import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';
import clientID from '../googleClient';

function LogoutButton(props) {
    const history = useHistory()
    const Logout = () => {
        props.Logout();
        history.push('/')
    };


    return (
        <Nav.Link
        eventKey='18'>
            <GoogleLogout
                clientId={clientID}
                render={renderProps => (
                    <button className="dropdown-item text-danger" onClick={renderProps.onClick}  disabled={renderProps.disabled}><FontAwesomeIcon icon={faPowerOff}/>{' '} Logout</button>
                )}
                buttonText="Logout"
                onLogoutSuccess={Logout}
            />
        </Nav.Link>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => {
            dispatch({ type: 'CLEAR_USER' })
        }
    }
};

export default connect(null, mapDispatchToProps)(LogoutButton);