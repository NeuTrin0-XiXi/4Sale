import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import AboutUs from './aboutus1'
import Sell from './Sell';
import ContactUs from './ContactUs'
import ProductPage from './ProductPage';
// import BackgroundImage from './BackgroundImage';
import Profile from './EditProfile';
import Buy from './Buy';
import Not_Found from './Not_Found';
import { withRouter } from 'react-router';

function Body(props) {

    if (props.Auth) {
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
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/buy/:category">
                    <Buy />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route>
                    <Not_Found />
                </Route>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about-us">
                    <AboutUs />
                </Route>
                <Route exact path="/contact-us">
                    <ContactUs />
                </Route>
                <Route exact path="/buy/:category">
                    <Buy />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route>
                    <Not_Found />
                </Route>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised
    }
};

export default withRouter(connect(mapStateToProps)(Body));




