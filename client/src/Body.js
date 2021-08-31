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
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import SoldItems from './pages/SoldItems';
import Notifications from './pages/Notifications';


function Body(props) {
    return (
        <>
           <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/about' exact component={AboutUs}/>
               <Route path='/contact' exact component={ContactUs}/>
               <Route path='/sell' exact component={Sell}/>
               <Route path='/notifications' exact component={Notifications}/>
               <Route path='/profile' exact component={Profile}/>
               <Route path='/favourites' exact component={Favourites}/>
               <Route path='/sold-items' exact component={SoldItems}/>
               <Route path='/buy/:category' exact component={Buy}/>
               <Route path='/search/:query' exact component={Search}/>
               <Route path='/product/:id' exact component={ProductPage}/>
               <Route path={'*'}  component={NOT_FOUND}/>
           </Switch>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised
    }
};

export default connect(mapStateToProps)(Body);




