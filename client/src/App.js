import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { useEffect, useRef } from 'react';
import axios from 'axios';

function App(props) {
    const { user, Update, auth, loading, accessToken } = props;
    const { notifications } = props.user

    if (accessToken) {
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${accessToken}`;
                return config;
            },
            err => {
                return Promise.reject(err);
            });
    }

    const socket = useRef(null);
    const notifs = useRef(notifications);
    const addNotif = useRef(null);

    useEffect(() => {
        const ENDPOINT = 'https://iitisoc-4sale.herokuapp.com/';
        socket.current = io(ENDPOINT, { transports: ['websocket', 'polling'] });
    }, []);

    useEffect(() => {
        addNotif.current = notif => {
            Update({
                ...user,
                notifications: [...notifs.current, notif]
            })
        }
    }, [user, Update])

    useEffect(() => {
        notifs.current = notifications;
    }, [loading, notifications])

    useEffect(() => {
        if (auth) {
            socket.current.emit('join', user.email);

            socket.current.on('notification', (notif) => {
                addNotif.current(notif)
                toast.success(notif.userName + ' ' + notif.message + ' ' + notif.itemTitle)
            });
        }
    }, [auth, user.email, addNotif]);

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
        auth: state.Authorised,
        loading: state.loading,
        accessToken: state.accessToken
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
