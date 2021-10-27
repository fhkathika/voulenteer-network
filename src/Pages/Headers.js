import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Headers = () => {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
     
      </>
    );
};

export default Headers;