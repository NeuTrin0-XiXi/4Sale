import React, { useState } from 'react'
import './Combined.css';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import ProfileButton from './components/ProfileButton';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

function Navbar(props) {
    const [search, setSearch] = useState('')

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    function Sell(props) {
        if (props.auth) {
            return <NavLink to="/sell" style={textColor} className="nav-link active navBarItems" aria-current="page" >Sell</NavLink>
        } else {
            return null
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.history.push(`/search/${search}`);
    };

    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    return (
        <nav className="navbar sticky-top navbar-expand-xxl navbar-light " style={{backgroundColor: '#333333'}}  >
            <div className="container-fluid">
                <NavLink to="/" style={logoColor} className="navbar-brand logo" >4Sale</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                        <div className="container d-flex justify-content:space-around">
                            <li className="nav-item navBarItems">
                                <NavLink to="/" style={textColor} className="nav-link navBarItems" id="homeTab" aria-current="page" href="/">Home</NavLink>
                            </li>
                            <li className="nav-item navBarItems">
                                <Sell auth={props.auth} />
                            </li>
                            <li className="nav-item navBarItems">
                                <NavLink to="/contact-us" style={textColor} className="nav-link navBarItems" aria-current="page" >Contact Us</NavLink>
                            </li>
                            <li className="nav-item navBarItems">
                                <NavLink to="/about-us" style={textColor} className="nav-link navBarItems" >About Us</NavLink>
                            </li>
                            <li className="nav-item navBarItems">
                                <div className="dropdown navBarItems">
                                    <button className="btn btn-secondary dropdown-toggle navCat" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                        <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Sports">Sports</NavLink></li>
                                        <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Books">Books</NavLink></li>
                                        <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Games">Games</NavLink></li>
                                        <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Utilities">Utilities</NavLink></li>
                                        <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Other">Other</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input autoCapitalize="sentences" onChange={handleChange} className="form-control me-2" id="navSearchBar" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" id="navSubmitBtn" type="submit">Search</button>
                    </form>
                    <ProfileButton />
                </div>
            </div>
        </nav>

    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.Authorised,
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Update: (user) => {
            dispatch({ type: 'UPDATE_USER', payload: user })
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
