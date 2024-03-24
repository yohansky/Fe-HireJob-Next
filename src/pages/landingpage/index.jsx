import React, { useState } from "react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import icon from "@/assets/img/icon.png";
import g1 from "@/assets/img/g1.png";
import Image from "next/image";
import g2 from "@/assets/img/g2.png";
import checklist from "@/assets/img/checklist.png";
import g3 from "@/assets/img/g3.png";
import checklist2 from "@/assets/img/checklist2.png";
import Slider from "react-slick";
import iconputih from "@/assets/img/iconputih.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarLogin from "@/components/navbarlogin";

const LandingPage = () => {
  const [getDisplayName, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavbarLogin />
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={icon} alt="Logo1" style={{ marginLeft: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
      </Navbar> */}
      {/* <Nav style={{ overflow: "hidden" }}>
        <div className="container mt-4">
          <Image src={icon} alt="Logo1" style={{ marginLeft: "50px" }} />
          <button type="button" className="btn ml-4" style={{ border: "1px solid #5E50A1", color: "#5E50A1", padding: "10px 20px", cursor: "pointer", marginLeft: "800px" }}>
            Masuk
          </button>
          <button type="button" className="btn ml-1" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
            Daftar
          </button>
        </div>
      </Nav> */}
      <div className="container">
        <div className="row" style={{ marginTop: "147px" }}>
          <div className="col-6" style={{ paddingTop: "136px" }}>
            <h2>Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum facere cumque, consequatur, inventore earum, consequuntur quis soluta nesciunt dolore similique minima vitae impedit excepturi. Esse minus aperiam cumque
              facere.
            </p>
            <Button className="mt-4" style={{ width: "210px", height: "63px" }}>
              Mulai Dari Sekarang
            </Button>
          </div>
          <div className="col-6">
            <Image src={g1} alt="gambar1" style={{ marginLeft: "130px" }} />
          </div>
        </div>
        {/* belum responsive */}
        <div className="row flex" style={{ marginTop: "152px" }}>
          <div className="col-sm-12 col-md-10 col-lg-7">
            <Image src={g2} alt="gambar2" />
          </div>
          <div className="col-sm-12 col-md-2 col-lg-5" style={{ paddingTop: "30px" }}>
            <h2>Kenapa harus mencari tallent di peworld</h2>

            <p style={{ marginTop: "36px" }}>
              {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
              <Image src={checklist} alt="checklist" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
              {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
              <Image src={checklist} alt="checklist" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
              {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
              <Image src={checklist} alt="checklist" /> Lorem ipsum dolor sit amet.
            </p>
            <p style={{ marginTop: "36px" }}>
              {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
              <Image src={checklist} alt="checklist" /> Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="row" style={{ marginTop: "152px" }}>
          <div className="col-6">
            <h2>Skill Tallent</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi quod velit, provident consequuntur similique perferendis cumque, voluptatum, temporibus voluptate alias voluptatem quia minus quo maiores eos vel
              consectetur eveniet?
            </p>
            <div className="row">
              <div className="col-6">
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> Java
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> Kotlin
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> PHP
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> JavaScript
                </p>
              </div>
              <div className="col-6">
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> Golang
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> C++
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> Ruby
                </p>
                <p style={{ marginTop: "36px" }}>
                  {/* <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> */}
                  <Image src={checklist2} alt="checklist" /> 10+ Bahasa lainnya
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image src={g3} alt="gambar3" />
          </div>
        </div>
        {/*  */}
        <div className="" style={{ marginTop: "155px" }}>
          <div className="" style={{ textAlign: "center" }}>
            <h2>Their opinion about peworld</h2>
            <div className="slider-container" style={{ marginTop: "52px" }}>
              <Slider {...settings}>
                <div>
                  <div className="card" style={{ width: "339px", height: "437px", borderradius: "8px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h3>Harry Styles</h3>
                  </div>
                </div>
                <div>
                  <div className="card" style={{ width: "339px", height: "437px", borderradius: "8px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h3>Niall Horan</h3>
                  </div>
                </div>
                <div>
                  <div className="card" style={{ width: "339px", height: "437px", borderradius: "8px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h3>Louis Tomlinson</h3>
                  </div>
                </div>
                <div>
                  <div className="card" style={{ width: "339px", height: "437px", borderradius: "8px", boxshadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
                    <h3>Yohanes Hubert</h3>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-center" style={{ marginTop: "232px" }}>
          <div className="card" style={{ width: "1140px", height: "227px", borderRadius: "40px, 8px, 40px, 8px", backgroundColor: "#5E50A1" }}>
            <div className="d-flex justify-content-around align-items-center my-auto">
              <h2>Lorem ipsum dolor sit amet</h2>
              <button type="button" className="btn ml-1" style={{ width: "210px", height: "63px", backgroundColor: "white", padding: "10px 20px", cursor: "pointer", color: "#796EAF", marginLeft: "16px" }}>
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div style={{ marginTop: "120px" }}>
        <div style={{ height: "401px", border: "1px solid #5E50A1", backgroundColor: "#5E50A1" }}>
          <div className="container">
            <div className="d-flex ">
              <div className="p-2 mx-auto my-3">
                <Image src={iconputih} alt="footer1" />

                <p className="col-4" style={{ marginTop: "30px", color: "white" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus culpa ab, eius voluptatum suscipit accusantium nostrum unde optio cum? Mollitia maxime illum minus libero suscipit saepe ratione soluta quod.
                </p>

                <div style={{ border: "1px solid white", width: "1140px", marginTop: "67px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
