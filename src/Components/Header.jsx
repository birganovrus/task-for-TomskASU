import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <header className="App-header">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand>Ruslan Birzhanov</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="https://drive.google.com/file/d/14gRqFIaHYLzwBxeopKuVm72pqjTsRTFo/view?usp=sharing"
              target="_blank"
            >
              Тестовое задание для ТомскАСУ
            </Nav.Link>
            <NavDropdown
              title="Использованные технологии"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://github.com/facebook/react"
                target="_blank"
              >
                React
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/reduxjs/react-redux"
                target="_blank"
              >
                React-Redux
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/typicode/json-server"
                target="_blank"
              >
                Json-Server
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/react-bootstrap/react-bootstrap"
                target="_blank"
              >
                React-Bootstrap
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://github.com/facebook/create-react-app"
                target="_blank"
              >
                Создано с помошью: <br />
                Create-React-App
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
