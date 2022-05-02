import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="brand" href="/"><p>Sundorban Furniture</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navstyle">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/manageitems'>Manage Items</Nav.Link>
                            <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
                            <Nav.Link as={Link} to='/myitems'>My items</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;