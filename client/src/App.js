import Navbar from './components/Navbar';
import Body from './Body';
import Footer from './components/Footer';

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
