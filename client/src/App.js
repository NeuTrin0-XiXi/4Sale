import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Body />
      </div>
      <Footer className="footer-container" />
    </div>
  );
}

export default App;
