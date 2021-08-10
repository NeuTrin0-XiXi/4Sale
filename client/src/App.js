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
import ProductPage from './ProductPage'; 
import BackgroundImage from './BackgroundImage';
import LoginPage from './LoginPage';
import IntroPage from './IntroPage';

function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className="App">
        <div>
          <Newnavbar2 />
        </div>
        {/* <div>
          <BackgroundImage />
        </div> */}
        <div className="content">
          <Switch>
          <Route exact path="/">
              <IntroPage/>
            </Route>
            <Route exact path="/4Sale">
              <Home/>
            </Route>
            <Route exact path="/4Sale/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/4Sale/sell">
              <Sample />
            </Route>
            <Route exact path="/4Sale/contactUs">
              <ContactUs />
            </Route>
            <Route exact path="/4Sale/login">
              <LoginPage />
            </Route>
            <Route exact path="/4Sale/product">                        {/*title/:description/:email/:price/:category */}
              <ProductPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
