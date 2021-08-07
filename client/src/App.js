import logo from './logo.svg';
import './App.css';
import Navbarnew from './Navbarnew';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './Sample';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Newnavbar2 from './Newnavbar2';
import TestJSONdb from './TestJSONdb';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className="App">
        <div>
          <Newnavbar2 />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/sell">
              <Sample />
            </Route>
            <Route exact path="/contactUs">
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;