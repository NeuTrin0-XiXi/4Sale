import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Navbar />
            <div style={{minHeight: '90vh'}}>
                <Body />
            </div>

            <Footer />
            <ToastContainer/>
        </>
    );
}

export default App;
