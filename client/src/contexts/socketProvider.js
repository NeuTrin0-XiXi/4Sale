import io from 'socket.io-client'
import SocketContext from './socketContext';
import { connect } from 'react-redux';

const SocketProvider = ({ children, user, auth }) => {
    const ENDPOINT = 'https://iitisoc-4sale.herokuapp.com';
    const socket = io(ENDPOINT, { transports: ['websocket', 'polling'] })
    if (auth) {
        socket.emit('join', user.email); 
    }
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