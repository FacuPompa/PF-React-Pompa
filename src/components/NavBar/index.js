import CarritoWidget from "../CarritoWidget";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div style={{ margin: "0 20px" }}>
      <Navbar expand="lg" className="navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <Navbar.Brand className="navegador" href="/">
            <img className="nav" style={{ width: "100px" }} src="/img/tunel_icon.png"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "white" }} to="/">Merchandising</Nav.Link>
              <Nav.Link style={{ color: "white" }} to="/">Nosotros</Nav.Link>
              <NavDropdown style={{ color: "white", textDecoration: "none" }} title="Editoriales" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="editorial/Ivrea">Ivrea</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="editorial/Panini">Panini</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="editorial/Ovni">Ovni</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="right">
              <Link style={{ textDecoration: "none" }} to="/carrito">
                <CarritoWidget />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
