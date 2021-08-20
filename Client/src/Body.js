import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import AboutUs from './AboutUs'
import Sell from './Sell';
import ContactUs from './ContactUs'
import ProductPage from './ProductPage';
// import BackgroundImage from './BackgroundImage';
import Profile from './EditProfile';
import Buy from './Buy';
import Not_Found from './Not_Found';
import { withRouter } from 'react-router';
import Search from './Search';
import Favourites from './Favourites';
import SoldItems from './SoldItems';
import Notifications from './Notifications';


function Body(props) {
    const { pathname } = props.location;
    const id = pathname.slice(9);
    const category = pathname.slice(5);
    const query = pathname.slice(8);
    if (props.Auth) {
        switch (pathname) {
            case '/':
                return (
                    <Home />
                );
            case '/about-us':
                return (
                    <AboutUs />
                );
            case '/sell':
                return (
                    <Sell />
                );
            case '/contact-us':
                return (
                    <ContactUs />
                );
            case '/notifications':
                return (
                    <Notifications />
                );
            case '/profile':
                return (
                    <Profile />
                );
            case '/favourites':
                return (
                    <Favourites />
                );
            case '/sold-items':
                return (
                    <SoldItems />
                );
            case `/buy/${category}`:
                return (
                    <Buy category={category} />
                );
            case `/search/${query}`:
                return (
                    <Search query={query} />
                );
            case `/product/${id}`:
                return (
                    <ProductPage id={id} />
                );
            default: return (
                <Not_Found />
            )
        }
        // return (
        //     <Switch>
        //         <Route exact path="/">
        //             <Home />
        //         </Route>
        //         <Route path="/about-us">
        //             <AboutUs />
        //         </Route>
        //         <Route path="/Sell">
        //             <Sell />
        //         </Route>
        //         <Route path="/contact-us">
        //             <ContactUs />
        //         </Route>
        //         <Route path="/notifications">
        //             <Notifications />
        //         </Route>
        //         <Route path="/profile">
        //             <Profile />
        //         </Route>
        //         <Route path="/favourites">
        //             <Favourites />
        //         </Route>
        //         <Route path="/sold-items">
        //             <SoldItems />
        //         </Route>
        //         <Route path="/buy/:category">
        //             <Buy />
        //         </Route>
        //         <Route path="/Search/:query">
        //             <Search />
        //         </Route>
        //         <Route path="/product/:id">
        //             <ProductPage />
        //         </Route>
        //         <Route>
        //             <Not_Found />
        //         </Route>
        //     </Switch>
        // )
    } else {
        switch (pathname) {
            case '/':
                return (
                    <Home />
                );
            case '/about-us':
                return (
                    <AboutUs />
                );
            case '/contact-us':
                return (
                    <ContactUs />
                );
            case `/buy/${category}`:
                return (
                    <Buy category={category} />
                );
            case `/search/${query}`:
                return (
                    <Search query={query} />
                );
            case `/product/${id}`:
                return (
                    <ProductPage id={id} />
                );
            default: return (
                <Not_Found />
            )
            // return (
            //     <Switch>
            //         <Route exact path="/">
            //             <Home />
            //         </Route>
            //         <Route path="/about-us">
            //             <AboutUs />
            //         </Route>
            //         <Route path="/contact-us">
            //             <ContactUs />
            //         </Route>
            //         <Route path="/buy/:category">
            //             <Buy />
            //         </Route>
            //         <Route path="/Search/:query">
            //             <Search />
            //         </Route>
            //         <Route path="/product/:id">
            //             <ProductPage />
            //         </Route>
            //         <Route>
            //             <Not_Found />
            //         </Route>
            //     </Switch>
            // )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        Auth: state.Authorised
    }
};

export default withRouter(connect(mapStateToProps)(Body));




