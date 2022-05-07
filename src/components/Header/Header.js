import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    return (
        <div className='nav-container'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="brand" href="/"><p>Sundorban Furniture</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navstyle">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/managefurniture'>Manage Furniture</Nav.Link>
                            <Nav.Link as={Link} to='/addfurniture'>Add Furniture</Nav.Link>
                            <Nav.Link as={Link} to='/mycollections'>My Collections</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                user ? <Nav.Link onClick={logout} as={Link} to='/'>Logout</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;