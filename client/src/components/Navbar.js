import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import { Container, Navbar, Form, Button, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
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
                        <Link style={textColor} to="/" >Home</Link><hr className='m-1 text-light' />
                        <Link to="/sell" style={textColor} >Sell</Link><hr className='m-1 text-light' />
                        <Link style={textColor} to="/about">About</Link><hr className='m-1 text-light' />
                        <Link style={textColor} to="/contact">Contact</Link><hr className='m-1 text-light' />
                        <Dropdown style={textColor} id="collasible-nav-dropdown">
                            <Dropdown.Toggle className='non-outlined-btn btn-warning ' >Buy</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/buy/All">All</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/buy/Sports">Sports</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/buy/Books">Books</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/buy/Games">Games</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/buy/Utilities">Utilities</Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item as={Link} to="/buy/Other">Others</Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown><hr className='m-1 text-light' />
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit} style={{ height: '40px' }}>
                        <Form.Control autoCapitalize="sentences" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Button variant='transparent' className='text-light' size='sm' type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form><hr className='m-1 text-light' />
                    <Nav className='mx-2' >
                        <ProfileButton />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

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
