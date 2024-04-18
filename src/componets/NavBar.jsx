
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home">Crud productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
            <NavLink to={"/Acercanos"} className={"nav-link"}>Acerca de nosotros</NavLink>
            <NavLink to={"/Admi"} className={"nav-link"}>Admistracion</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default NavBar;