import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './hooks/useAuth';


const Headers = () => {
  const {user,LogOut}=useAuth()
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
           
            {
              user?.email?
              <button onClick={LogOut}>Log Out</button>
              :
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            }
            <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="/login">{user.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
          </Nav>
          </Container>
        </Navbar>
      
     
      </>
    );
};

export default Headers;