import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import icon from "@/assets/img/icon.png";
import Image from "next/image";
import Link from "next/link";

const NavbarLogin = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={icon} alt="Logo1" style={{ marginLeft: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {/* <Nav.Link href="/auth/Login">
                <button type="button" className="btn" style={{ border: "1px solid #5E50A1", color: "#5E50A1", padding: "10px 20px", cursor: "pointer", marginLeft: "800px" }}>
                  Masuk
                </button>
              </Nav.Link>
              <Nav.Link href="/auth/Register/Pekerja">
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Daftar
                </button>
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Link href="/auth/Login">
                <Button variant="outline-success" className="me-2">
                  Masuk
                </Button>
              </Link>
              <Link href="/auth/Register/Pekerja">
                <Button variant="outline-success" className="me-2">
                  Daftar
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
