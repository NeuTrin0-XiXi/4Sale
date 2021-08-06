import './App.css';
import Navbarnew from './components/Navbarnew';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './components/Sample';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Newnavbar2 from './components/Newnavbar2';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Newnavbar2 />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
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
  );
}

export default App;
