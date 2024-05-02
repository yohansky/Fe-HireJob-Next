import NavbarProfile from "@/components/navbarprofile";
import React, { useEffect, useState } from "react";
import ppp from "@/assets/img/ppp.png";
import Image from "next/image";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Col, Row } from "react-bootstrap";
import Footer from "@/components/footer";
import Link from "next/link";
import mail from "@/assets/img/mail.png";
import phone from "@/assets/img/phone.png";
import linked from "@/assets/img/linkedin.png";
import NavbarLogin from "@/components/navbarlogin";

const ProfilePerusahaan = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //useeffect akan membaca perubahan data
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    // ambil userid dari getitem localstorage (sama seperti conditional rendering navbar di landingpage)
  }, [token, userId]);
  return (
    <>
      {token && userId ? <NavbarProfile userId={userId} /> : <NavbarLogin />}
      <div className="container">
        <div className="card rounded" style={{ marginTop: "40px" }}>
          <div className="rounded" style={{ backgroundColor: "#5E50A1", height: "200px", width: "100%", zIndex: "0", position: "absolute" }}></div>
          <div className="d-flex justify-content-center" style={{ zIndex: "1", position: "relative", marginTop: "120px" }}>
            {/* <div className="d-flex flex-column"> */}
            <Image src={ppp} alt="ppp" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <h3>PT. Martabat Jaya Abadi</h3>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>Financial</h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Image src={pinmap} alt="pinmap" />
            <h5>Purwokerto, Jawa Tengah</h5>
          </div>
          <div className="d-flex mt-4">
            <div style={{ textAlign: "center" }}>
              <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eum ad voluptates dolor nesciunt itaque amet debitis enim in distinctio veritatis ipsa soluta totam, porro ratione culpa odio similique quis.</h5>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-4">
            <Link href="/profileperusahaan/edit">
              <Button style={{ color: "white", backgroundColor: "#5E50A1" }}>Edit Profile</Button>
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={mail} alt="mail" /> martabatjaya@gmail.com
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={phone} alt="phone" /> 021-2990-0056
            </h5>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h5>
              <Image src={linked} alt="mail" /> MartabatJaya
            </h5>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePerusahaan;
