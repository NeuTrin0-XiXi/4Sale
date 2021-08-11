import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs'
import Sell from './Sell';
import ContactUs from './ContactUs'
import ProductPage from './ProductPage';
// import BackgroundImage from './BackgroundImage';
import LoginPage from './LoginPage';
import CategoryPage from './CategoryPage';

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
            <Route exact path="/category">
                <CategoryPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route  exact path="/item/:_id">
                <ProductPage />
            </Route>
        </Switch>
    )
}

export default Body;