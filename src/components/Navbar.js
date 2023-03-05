import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
    return( 
<Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' fixed='top' style={{marginBottom: "1rem"}}>
<Container>
  <Navbar.Brand href='#home'>Ukázka</Navbar.Brand>
  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className='me-auto'>
  <Nav.Link href='#home'>Home</Nav.Link>
  <Nav.Link href='#body'>Drby a novinky</Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    );
}
 export default NavbarComponent;