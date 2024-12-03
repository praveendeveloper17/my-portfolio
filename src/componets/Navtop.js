import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navtop.css';

const Navtop = () => {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" className="navbar-container ">
      <Container>
        <Navbar.Brand href="#home" className='nav-content text-white'>Praveen Kumar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  ">
            <Nav.Link href="#Home" className='nav-content text-white'>Home</Nav.Link>
            <Nav.Link href="#About" className='nav-content text-white'>About</Nav.Link>
            <Nav.Link href="#Skils" className='nav-content text-white'>Skils</Nav.Link>
            <Nav.Link href="#project" className='nav-content text-white'>Praject</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Contact" className='nav-content text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      
    </div>
  );
};

export default Navtop;
