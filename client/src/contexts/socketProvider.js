import io from 'socket.io-client'
import SocketContext from './socketContext';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const SocketProvider = ({ children, user, auth }) => {
    const ENDPOINT = 'https://iitisoc-4sale.herokuapp.com';
    const socket = io(ENDPOINT, { transports: ['websocket', 'polling'] })
    useEffect(() => {
        if (auth) {
            socket.emit('join', user.email);
        }
    }, [auth, socket, user.email])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
};

export default connect(mapStateToProps)(SocketProvider);