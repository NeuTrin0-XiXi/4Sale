import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Sell from './Sell';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Profile from './EditProfile';

function Body() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about-us">
                <AboutUs />
            </Route>
            <Route exact path="/sell">
                <Sell />
            </Route>
            <Route exact path="/contact-us">
                <ContactUs />
            </Route>
            {/* <Route exact path="/user">
                <Profile />
            </Route> */}
        </Switch>
    );
}

export default Body;