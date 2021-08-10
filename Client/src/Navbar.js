import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const textColor = {
        color: 'white',
        textDecoration: 'none'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-xxl navbar-light navbarCustom">
                <div className="container-fluid">
                    <Link to="/" style={logoColor}><a className="navbar-brand logo" href="#">4Sale</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li className="nav-item navBarItems">
                                    <Link to="/" style={textColor}><a className="nav-link active navBarItems" id="homeTab" aria-current="page" href="/">Home</a></Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/sell" style={textColor}><a className="nav-link active navBarItems" aria-current="page" href="#">Sell</a></Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/contact-us" style={textColor}><a className="nav-link active navBarItems" aria-current="page" href="#">Contact Us</a></Link>
                                </li>
                                <li className="nav-item navBarItems">
                                    <Link to="/about-us" style={textColor}><a className="nav-link navBarItems" href="#">About Us</a></Link>
                                </li>
                            </div>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="navbarDropdown" role="button" aria-expanded="false">
                                    <label id="dropdownlabel">Categories</label>
                                </a>
                            </li>
                            <li>
                                <select id="ddlist">
                                    <option value="allCategories">All Categories</option>
                                    <option value="sports">Sports</option>
                                    <option value="books">Books</option>
                                    <option value="games">Games</option>
                                    <option value="utilities">Utilities</option>
                                </select>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" id="navSearchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" id="navSubmitBtn" type="submit">Search</button>
                            <Link to="/login" style={{ textDecoration: 'none' }}><button className="btn btn-outline-warning" id="navSubmitBtn" type="LOGIN">Login</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
