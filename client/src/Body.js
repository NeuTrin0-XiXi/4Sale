import React from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import AboutUs from './pages/AboutUs'
import Sell from './Sell';
import ContactUs from './ContactUs'
import ProductPage from './ProductPage';
import Profile from './EditProfile';
import Buy from './Buy';
import NOT_FOUND from './Not_Found';
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
                <NOT_FOUND />
            )
        }
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
                <NOT_FOUND />
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised
    }
};

export default withRouter(connect(mapStateToProps)(Body));




