import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import ProfileButton from './ProfileButton';
import { Container, Navbar, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavbarComponent(props) {
    const [search, setSearch] = useState('')

    const textColor = {
        color: 'white',
        textDecoration: 'none',
        margin: 'auto 10px'
    };
    const logoColor = {
        color: '#62c1ad',
        textDecoration: 'none'
    };

    function Sell(props) {
        if (props.auth) {
            return <Link to="/sell" style={textColor} >Sell</Link>
        } else {
            return <Button style={textColor} variant='transparent' className='disabled' >Sell</Button>
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.history.push(`/search/${search}`);
    };

    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    return (<>
        <Navbar collapseOnSelect expand="lg" sticky='top' style={{ backgroundColor: '#333333' }} variant="dark" className='py-1 px-3'>
            <Container fluid >
                <Link to="/" style={logoColor} className="navbar-brand logo" >4Sale</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={textColor} to="/" >Home</Link><hr  className='m-1 text-light'  />
                        <Sell auth={props.auth} /><hr  className='m-1 text-light'  />
                        <Link style={textColor} to="/about-us">About</Link><hr  className='m-1 text-light'  />
                        <Link style={textColor} to="/contact-us">Contact</Link><hr  className='m-1 text-light'  />
                        <NavDropdown style={textColor} title="Categories" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" to="/buy/Sports">Sports</Link>
                            <Link className="dropdown-item" to="/buy/Books">Books</Link>
                            <Link className="dropdown-item" to="/buy/Games">Games</Link>
                            <Link className="dropdown-item" to="/buy/Utilities">Utilities</Link>
                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/buy/Other">Others</Link>
                        </NavDropdown><hr  className='m-1 text-light'  />
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit} style={{height: '40px'}}>
                        <Form.Control autoCapitalize="sentences" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Button variant='transparent' className='text-light'  size='sm' type="submit"><FontAwesomeIcon icon={faSearch}/></Button>
                    </Form><hr  className='m-1 text-light'  />
                    <Nav className='mx-2' >
                        <ProfileButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        {/* <nav className="navbar sticky-top navbar-expand-xxl navbar-light " style={{backgroundColor: '#333333'}}  >
            <div className="container-fluid">
                <Link to="/" style={logoColor} className="navbar-brand logo" >4Sale</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 e">
                        <div className="container d-flex justify-content:space-around">
                            <li className="nav-item navBarItems">
                                <Link to="/" style={textColor} className="nav-link navBarItems" id="homeTab" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item navBarItems">
                                <Sell auth={props.auth} />
                            </li>
                            <li className="nav-item navBarItems">
                                <Link to="/contact-us" style={textColor} className="nav-link navBarItems" aria-current="page" >Contact Us</Link>
                            </li>
                            <li className="nav-item navBarItems">
                                <Link to="/about-us" style={textColor} className="nav-link navBarItems" >About Us</Link>
                            </li>
                            <li className="nav-item navBarItems">
                                <div className="dropdown navBarItems">
                                    <button className="btn btn-secondary dropdown-toggle navCat" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                        <Link className="dropdown-item" to="/buy/Sports">Sports</Link>
                                        <Link className="dropdown-item" to="/buy/Books">Books</Link>
                                        <Link className="dropdown-item" to="/buy/Games">Games</Link>
                                        <Link className="dropdown-item" to="/buy/Utilities">Utilities</Link>
                                        <Link className="dropdown-item" to="/buy/Other">Other</Link>
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
        </nav> */}
    </>


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarComponent));
