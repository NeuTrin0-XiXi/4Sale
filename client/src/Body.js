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
import Ads from './pages/Ads';
import Notifications from './pages/Notifications';
import Orders from './pages/Orders';
import LostFound from './pages/LostFound';
import Spinner from './components/Spinner';


function Body(props) {
    const restrictedRoutes = [
        <Route key={0} path='/notifications' exact component={Notifications} />,
        <Route key={1} path='/profile' exact component={Profile} />,
        <Route key={2} path='/favourites' exact component={Favourites} />,
        <Route key={3} path='/your-ads' exact component={Ads} />,
        <Route key={4} path='/orders' exact component={Orders} />
    ]
    return (<>
        {
            (props.Auth) || (!props.Auth && !props.loading) ?
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={AboutUs} />
                    <Route path='/contact' exact component={ContactUs} />
                    <Route path='/buy/:category' exact component={Buy} />
                    <Route path='/search/:query' exact component={Search} />
                    <Route path='/product/:id' exact component={ProductPage} />
                    <Route path='/sell' exact component={Sell} />
                    <Route path='/lost-found' exact component={LostFound} />
                    {props.Auth ?
                        restrictedRoutes.map(routes => routes)
                        : null
                    }
                    <Route path={'*'} component={NOT_FOUND} />
                </Switch>
                : <Spinner />
        }
    </>

    )
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Authorised,
        loading: state.loading
    }
};

export default connect(mapStateToProps)(Body);