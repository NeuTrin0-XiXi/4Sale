import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { useEffect, useRef } from 'react';

function App(props) {
    const { user, Update, auth } = props
    const { notifications } = props.user;

    const ENDPOINT = 'https://iitisoc-4sale.herokuapp.com/';
    const socket = useRef(io(ENDPOINT, { transports: ['websocket', 'polling'] }))

    useEffect(() => {
        if (auth) {
            socket.current.emit('join', user.email);
            console.log("Connected to room: " + user.email)
        }
    }, [auth, user.email]);

    useEffect(() => {
        socket.current.on('notification', (notif) => {
            if (user.email !== '') {
                Update({
                    ...user,
                    notifications: [...notifications, notif]
                })
                toast.success(notif.userName + ' ' + notif.message + ' ' + notif.itemTitle)
            }
        })
    }, [Update, user, notifications])

    return (
        <>
            <Navbar />
            <div style={{ minHeight: '90vh' }}>
                <Body />
            </div>
            <ScrollToTop />
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
        </>
    );

}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        auth: state.Authorised
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
