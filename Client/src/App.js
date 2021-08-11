import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <Router >
      <div className="App">
        <div>
          <Navbar />
        </div>
        {/* <div>
          <BackgroundImage />
        </div> */}
        <div className="content">
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>

  );
}

export default App;
