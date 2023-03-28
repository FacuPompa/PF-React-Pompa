import CarritoWidget from "../CarritoWidget";
import "./styles.scss";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar className="nav" expand="lg">
      <Container className="nav" >
        <Navbar.Brand className="nav navegador" href="/"><img className="nav" style={{width: "100px"}} src="/images/tunel_icon.png"></img></Navbar.Brand>
        <Navbar.Toggle className="nav" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav" id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link style={{color:"white"}} className="nav" to="/">Merchandising</Nav.Link>
            <Nav.Link style={{color:"white"}} className="nav" to="/">Nosotros</Nav.Link>
            <NavDropdown style={{color:"white", textDecoration:"none"}} className="nav" title="Editoriales" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="editorial/Ivrea">Ivrea</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="editorial/Panini">Panini</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="editorial/Ovni">Ovni</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <div className="right nav">
              <Link style={{textDecoration:"none"}} className="nav" to="/carrito">
                <CarritoWidget />
              </Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;