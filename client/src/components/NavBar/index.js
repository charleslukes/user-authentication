import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const NavBar = () => {

return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/home">NodeAuth</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/members">Members</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
    <Nav className="mr-sm-2">
    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;
