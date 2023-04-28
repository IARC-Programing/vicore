import React from "react";
import { Button } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavbarData } from "../../Data";

function Navbars() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500">
      {NavbarData.map((item, index) => (
        <Navbar key={index}>
          {/* {item?.link} */}
          {/* <Link to="/">Home</Link> */}
          <Container fluid>
            <Navbar.Brand className="font-bold">
              <span className="text-slate-50 text-xl font-mono">VI Core</span>
            </Navbar.Brand>
            <Nav className="flex-col ml-auto">
              <Button variant="contained" color="primary"><span className="font-bold text-slate-50">login</span></Button>
              &nbsp;
              <Button href="/signup" variant="contained"><span className="font-bold text-rose-500">sign up</span></Button>
            </Nav>

          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Navbars;
