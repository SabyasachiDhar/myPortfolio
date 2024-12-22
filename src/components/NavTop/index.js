import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link> 
                        <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link> 
                        <Nav.Link as={NavLink} to="/projects" activeClassName="active">Projects</Nav.Link> 
                        <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
