import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>
     
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' fixed='top'>
    <Container>
      <Navbar.Brand href='#home'>Ukázka</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className='me-auto'>
      <Nav.Link href='#home'>11111</Nav.Link>
      <Nav.Link href='#home'>22222</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

    </div>
  


  );
}

export default App;
