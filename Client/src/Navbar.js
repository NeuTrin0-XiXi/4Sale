import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
                    <Link to="/" style={logoColor} className="navbar-brand logo" >4Sale</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li className="nav-item navBarItems">
                                    <Link to="/" style={textColor} className="nav-link active navBarItems" id="homeTab" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/sell" style={textColor} className="nav-link active navBarItems" aria-current="page" >Sell</Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/contact-us" style={textColor} className="nav-link active navBarItems" aria-current="page" >Contact Us</Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/about-us" style={textColor} className="nav-link navBarItems" >About Us</Link>
                                </li>
                            </div>
                            <li className="nav-item dropdown navBarItems">
                                <button className="nav-link" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="ddlist">
                                    <li><Link className="dropdown-item custom-cat-link" to="#">Sports</Link></li>
                                    <li><Link className="dropdown-item custom-cat-link" to="#">Books</Link></li>
                                    <li><Link className="dropdown-item custom-cat-link" to="#">Games</Link></li>
                                    <li><Link className="dropdown-item custom-cat-link" to="#">Utilities</Link></li>
                                    <li><Link className="dropdown-item custom-cat-link" to="#">Other</Link></li>
                                </ul>
                                {/* <a className="nav-link" id="navbarDropdown" role="button" aria-expanded="false">
                                    <label id="dropdownlabel" htmlFor="ddlist">Categories</label>
                                </a>
                                <select id="ddlist" >
                                    <option value="allCategories">All Categories</option>
                                    <option value="sports">Sports</option>
                                    <option value="books">Books</option>
                                    <option value="games">Games</option>
                                    <option value="utilities">Utilities</option>
                                    <option value="other">Other</option>
                                </select> */}
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
