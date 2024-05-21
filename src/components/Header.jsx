import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <>
         {/* <Navbar  data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home"><img style={{width:"100px"}} src="https://2.bp.blogspot.com/-0JpTzYgxrdo/W0kYLTiRADI/AAAAAAAAJ-k/uiBhCxfYnOc35HjKuMJJ50BJL9Y9BwNgwCK4BGAYYCw/s1280/ultra-final%2B2018.png" alt="" /></Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Service</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <button className='btn btn-info'>Sign Up</button>
          </Nav>
        </Container>
      </Navbar> */}
       <Navbar  data-bs-theme="dark" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            style={{ width: "100px" }}
            src="https://2.bp.blogspot.com/-0JpTzYgxrdo/W0kYLTiRADI/AAAAAAAAJ-k/uiBhCxfYnOc35HjKuMJJ50BJL9Y9BwNgwCK4BGAYYCw/s1280/ultra-final%2B2018.png"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Service</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Button variant="info" className="">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
