import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import SocketContext from './contexts/socketContext';
import { useContext } from 'react';

function App(props) {
    const { user, Update } = props
    const { notifications } = props.user;
    const socket = useContext(SocketContext)


    socket.on('notification', (notif) => {
        Update({
            ...user,
            notifications: [...notifications, notif]
        })
        toast.success(notif.userName + ' ' + notif.message)
        console.log('notif came')
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
        AuthLoading: state.loading,
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
