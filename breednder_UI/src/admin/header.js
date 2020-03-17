import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">BreedNder</Navbar.Brand>
          <Nav.Link>
            <Nav.Item>
              <Link to="/AdminSpecies">Species</Link>{" "}
            </Nav.Item>
          </Nav.Link>
          <Nav.Link>
            <Nav.Item>
              <Link to="/AdminPremium">Premium </Link>
            </Nav.Item>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default App;
