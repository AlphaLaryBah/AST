import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";


class NavHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand>
            <Link
              to="/home"
              style={{ textDecoration: "none" }}
              className="text-dark"
            >
              A$'T
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
              <Nav.Link>
                <Link
                  to="/home"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Personal"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Personal
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/Stocks"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Stocks
                </Link>
              </Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavHeader;
