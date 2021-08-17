import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { NavLink} from 'react-router-dom';
// import { connect } from 'react-redux';
import ProfileButton from './components/ProfileButton';


const Navbar = (props) => {
    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    return (
        <div className="Navbar-container">
            <nav className="navbar sticky-top navbar-expand-xxl navbar-light navbarCustom">
                <div className="container-fluid custom-navbar">
                    <NavLink to="/" style={logoColor} className="navbar-brand logo" >4Sale</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li className="nav-item navBarItems">
                                    <NavLink to="/" style={textColor} className="nav-link active navBarItems" id="homeTab" aria-current="page" href="/">Home</NavLink>
                                </li>
                                <li className="nav-item navBarItems">
                                    <NavLink to="/sell" style={textColor} className="nav-link active navBarItems" aria-current="page" >Sell</NavLink>
                                </li>
                                <li className="nav-item navBarItems">
                                    <NavLink to="/contact-us" style={textColor} className="nav-link active navBarItems" aria-current="page" >Contact Us</NavLink>
                                </li>
                                <li className="nav-item navBarItems">
                                    <NavLink to="/about-us" style={textColor} className="nav-link navBarItems" >About Us</NavLink>
                                </li>
                            </div>
                            <li className="nav-item dropdown navBarItems">
                                <button className="nav-link" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="ddlist">
                                    <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Sports">Sports</NavLink></li>
                                    <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Books">Books</NavLink></li>
                                    <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Games">Games</NavLink></li>
                                    <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Utilities">Utilities</NavLink></li>
                                    <li><NavLink className="dropdown-item custom-cat-link" to="/buy/Other">Other</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input autoCapitalize="sentences" className="form-control me-2" id="navSearchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" id="navSubmitBtn" type="submit">Search</button>
                        </form>
                        <ProfileButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default Navbar;
