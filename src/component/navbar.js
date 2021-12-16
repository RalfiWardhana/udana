import{Navbar,Nav, Container,NavDropdown} from 'react-bootstrap'
import "../styles/navbar.css"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
        <Container>
            <Navbar.Brand><img src='udana.png' className='logo-navbar'></img></Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="navbar-info" style={{color:"white"}}>Waralaba</Nav.Link>
                <Nav.Link className="navbar-info" style={{color:"white"}}>FAQ</Nav.Link>
                <Nav.Link className="navbar-info" style={{color:"white"}}>Tentang</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link className="navbar-login" style={{color:"white"}}>Masuk</Nav.Link>
                <Nav.Link className="navbar-registrasi" style={{color:"white"}}>Mulai Daftar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;