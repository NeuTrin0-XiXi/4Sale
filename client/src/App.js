// import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function App() {
    return (
        <>
            <Navbar />
            <div style={{minHeight: '90vh'}}>
                <Body />
            </div>

            <Footer />
        </>
    );
}

export default App;
