import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import Combined from './Combined.css';
import { Link } from 'react-router-dom';
const Navbarnew = () => {
  return (
    <div className=" container-fluid navbar-expand NavbarCustomEdit" width="100%">
      <header class="p-3 text-white navBarHeader">
        <div class="container-fluid d-flex justify-content-between navbarContainer">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo">4Sale</a>
          <div class=" container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-around mb-md-0 navarUl">
              <li><a href="#home" class="nav-link px-2 text-secondary home "><Link to="/">Home</Link></a></li>
              <li><a href="#aboutUs" class="nav-link px-2 text-white about"><Link to="/aboutUs">About Us</Link></a></li>
              <li><a href="#buy" class="nav-link px-2 text-white buy"><Link to="/buy">Buy</Link></a></li>
              <li><a href="#sell" class="nav-link px-2 text-white sell"><Link to="/sell">Sell</Link></a></li>
              <li><a href="#contactUs" class="nav-link px-2 text-white contact"><Link to="/contactUs">Contact Us</Link></a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    </div>

  )
}

export default Navbarnew
