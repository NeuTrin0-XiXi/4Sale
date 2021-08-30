import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { connect } from 'react-redux';
import Spinner from './components/Spinner';

function App(props) {
    

    if (false) {
        return <Spinner />
    } else {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: '90vh' }}>
                    <Body />
                </div>
                <ScrollToTop />
                <Footer />
                <ToastContainer />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        AuthLoading: state.loading
    }
};

export default connect(mapStateToProps)(App);
