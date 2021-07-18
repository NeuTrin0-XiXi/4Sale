import logo from './logo.svg';
import './App.css';
import Footer2 from './Footer2';
import Sample from './Sample';
import AboutUs from './AboutUs';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
// import  EditProfile  from './EditProfile';
// import TestingCodes from './TestingCodes';


// import SellingPage from './SellingPage';
// // import Footer from './Footer';
// import Navbarnew from './Navbarnew';
// import AboutUs from './AboutUs';
// // import TileSet from './TileSet';


function App() {
  return (
    <Router>
    <div className="App">
      <div className = "content">
        <Switch>
          <Route exact path = "/Sample">
            <Sample />
          </Route>
          <Route exact path = "/AboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </div>
      {/* <EditProfile /> */}
      {/* <TestingCodes /> */}
    <AboutUs />
    </div>
    </Router>
  );
}

export default App;
