import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Combined.css';
import { NavLink } from 'react-router-dom';

const Newnavbar2 = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbarCustom" id="navbar">
                <div class="container-fluid">
                    <NavLink class="navbar-brand logo" to="/">4Sale</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className="container d-flex justify-content:space-around">
                                <li class="nav-item navBarItems">
                                    <NavLink class="nav-link active navBarItems" id="homeTab" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item navBarItems">
                                    <NavLink class="nav-link active navBarItems" aria-current="page" to="/sell">Sell</NavLink>
                                </li>
                                <li class="nav-item navBarItems">
                                    <NavLink class="nav-link active navBarItems" aria-current="page" to="contact-us">Contact Us</NavLink>
                                </li>
                                <li class="nav-item navBarItems">
                                    <NavLink class="nav-link navBarItems" to="about-us">About Us</NavLink>
                                </li>
                            </div>
                            <li class="nav-item dropdown">
                                <NavLink class="nav-link " to="#" id="navbarDropdown" role="button" aria-expanded="false">
                                    <label id="dropdownlabel">Categories</label>
                                </NavLink>
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
                        <form class="d-flex">
                            <input class="form-control me-2" id="navSearchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" id="navSubmitBtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Newnavbar2
