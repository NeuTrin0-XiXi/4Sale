import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Newnavbar2 from './Newnavbar2';
import Home from './Home';
import Sample from './Sample';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Profile from './EditProfile'
import Footer2 from './Footer2';

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
            {/* <Route exact path="/item/:id">
              <Item/>
            </Route> */}
            {/* <Route exact path="/buy">
              <Buy/>
            </Route> */}
            <Route exact path="/user/:id">
              <Profile/>
            </Route>
          </Switch>
        </div>
        <div>
          <Footer2 />
        </div>
      </div>
    </Router>
  );
}





export default App;
