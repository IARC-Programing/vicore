import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavbarData } from "../../Data";

function Navbars() {
  return (
    <div className="bg-red-400">
      {NavbarData.map((item, index) => (
        <Navbar key={index}>
          {/* {item?.link} */}
          {/* <Link to="/">Home</Link> */}
          <Container fluid>
            <Navbar.Brand className="font-bold">VI Core</Navbar.Brand>
            <Nav className="ml-auto">
              <a href="/login">Login</a>
            </Nav>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navbars;
