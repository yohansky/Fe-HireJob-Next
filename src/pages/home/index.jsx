import NavbarLogin from "@/components/navbarlogin";
import NavbarProfile from "@/components/navbarprofile";
import Image from "next/image";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import miniprofile from "@/assets/img/miniprofile.png";
import pinmap from "@/assets/img/pinmap.png";
import Link from "next/link";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <>
      <NavbarProfile />
      <div style={{ backgroundColor: "#5E50A1", width: "1488px", height: "100px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container ">
        <div style={{ marginTop: "30px", zIndex: "1", position: "relative" }}>
          <h2 style={{ color: "white" }}>Top Jobs</h2>
        </div>
        <div style={{ marginTop: "50px" }}>
          <div className="card">
            <InputGroup>
              <Form.Control size="lg" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
              <Button variant="outline-secondary">Kategori</Button>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="mt-4" style={{ marginTop: "50px" }}>
          <div className="card">
            <div className="row">
              <div className="col-lg-1 col-md-2 col-sm-2">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <Link href={"/profileuser"}>
                  <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                    Lihat Profile
                  </button>
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
