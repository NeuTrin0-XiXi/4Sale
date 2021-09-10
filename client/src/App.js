import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { useEffect } from 'react';

function App(props) {
    const { user, Update, auth } = props
    const { notifications } = props.user;

    let socket = null

    useEffect(() => {
        if (auth) {
            const ENDPOINT = 'https://iitisoc-4sale.herokuapp.com/';
            socket = io(ENDPOINT, { transports: ['websocket', 'polling'] })
            socket.emit('join', user.email);
            console.log("Connected to room: " + user.email)
        }
    }, [auth]);

    useEffect(() => {
        if (socket !== null) {
            socket.on('notification', (notif) => {
                Update({
                    ...user,
                    notifications: [...notifications, notif]
                })
                toast.success(notif.userName + ' ' + notif.message)
            })
        }
    })


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
