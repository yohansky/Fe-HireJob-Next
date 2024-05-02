import React, { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import bell from "@/assets/img/bell.png";
import mail from "@/assets/img/mail.png";
import navprofile from "@/assets/img/navbarprofile.png";
import Image from "next/image";
import icon from "@/assets/img/icon.png";
import Link from "next/link";
import axios from "axios";

const NavbarProfile = ({ userId }) => {
  const [pekerja, setPekerja] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${userId}/worker`, { withCredentials: true })
      .then((res) => {
        // setPekerja(res.data);
        setPekerja(res.data[0].id);
        console.log(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);
  return (
    <>
      <Navbar expand="lg" className=" bg-body-tertiary test" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/landingpage">
            <Image src={icon} alt="Logo1" style={{ marginLeft: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <div className="d-flex flex-row" style={{ margin: "auto 6vw" }}>
              <div className="bell" style={{ marginRight: "20px" }}>
                <a href="#">
                  <Image src={bell} alt="bell" />
                </a>
              </div>
              <div className="mail" style={{ marginRight: "20px" }}>
                <a href="#">
                  <Image src={mail} alt="mail" />
                </a>
              </div>
              <div className="navbarprofile" style={{ marginRight: "60px" }}>
                <Link href={`/profileuser/${pekerja}`}>
                  {/* <Link href={`/profileuser/edit/${pekerja}`}> */}
                  <Image src={navprofile} alt="profilenavbar" />
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarProfile;
