// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import { connect } from 'react-redux';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Sell from './pages/Sell';
import ContactUs from './pages/ContactUs'
import ProductPage from './pages/ProductPage';
import Profile from './pages/ProfilePage';
import Buy from './pages/Buy';
import NOT_FOUND from './pages/Not_Found';
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
    console.log(pathname)
  
    
}




const { user } = props;
const { _id, title, description, price, userName, userEmail, date, images } = productDetails;
let date1 = date.slice(0, 10);
const yr = date1.slice(0, 4);
const mnth = date1.slice(5, 7);
const dte = date1.slice(8, 10);