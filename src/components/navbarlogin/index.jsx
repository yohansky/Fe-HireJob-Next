import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import icon from "@/assets/img/icon.png";
import Image from "next/image";

const NavbarLogin = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={icon} alt="Logo1" style={{ marginLeft: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/auth/Login">
                <button type="button" className="btn ml-4" style={{ border: "1px solid #5E50A1", color: "#5E50A1", padding: "10px 20px", cursor: "pointer", marginLeft: "800px" }}>
                  Masuk
                </button>
              </Nav.Link>
              <Nav.Link href="/auth/Register/Pekerja">
                <button type="button" className="btn ml-1" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Daftar
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
