import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Newnavbar2 from './Newnavbar2';
import Body from './Body';
import Footer2 from './Footer2';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Newnavbar2 />
        </div>
        <div className="content">
          <Body />
        </div>
        <div>
          <Footer2 />
        </div>
      </div>
    </Router>
  );
}





export default App;
