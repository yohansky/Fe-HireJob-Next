import React, { useEffect, useState } from "react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import icon from "@/assets/img/icon.png";
import g1 from "@/assets/img/g1.png";
import Image from "next/image";
import g2 from "@/assets/img/g2.png";
import checklist from "@/assets/img/checklist.png";
import g3 from "@/assets/img/g3.png";
import checklist2 from "@/assets/img/checklist2.png";
import iconputih from "@/assets/img/iconputih.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarLogin from "@/components/navbarlogin";
import Footer from "@/components/footer";
import Link from "next/link";
import NavbarProfile from "@/components/navbarprofile";
import Carousel from "@/components/carousel";
import axios from "axios";
import Cookies from "js-cookie";

const LandingPage = () => {
  const [getDisplayName, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  //get user
  useEffect(() => {
    // Hapus spasi ekstra dari cookie
    const cookieValue = document.cookie.cookieValue;
    console.log(cookieValue);
    // Ambil nilai cookie dengan nama 'jwt'
    // const jwtToken = cookieValue
    // .split(";")
    // .find((row) => row.startsWith("jwt="))
    // ?.split("=")[1];

    // console.log(jwtToken);

    axios
      .get(`http://localhost:8080/user`, { withCredentials: true })
      .then((res) => {
        // setUser(res.data);
        console.log(res.data);
        localStorage.setItem("userid", res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
  }, [token, userId]);

  return (
    <>
      {token && userId ? <NavbarProfile /> : <NavbarLogin />}
      <div className="container" style={{ marginTop: "10vh" }}>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 mb-3 order-md-2 order-lg-1 pl-3" style={{ paddingTop: "136px" }}>
            <h2>Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum facere cumque, consequatur, inventore earum, consequuntur quis soluta nesciunt dolore similique minima vitae impedit excepturi. Esse minus aperiam cumque
              facere.
            </p>
            <Link href={"/home"}>
              <Button className="mt-4" style={{ width: "210px", height: "63px" }}>
                Mulai Dari Sekarang
              </Button>
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 order-md-1 order-lg-2">
            <Image src={g1} className="gambar1" alt="gambar1" style={{ marginLeft: "60px" }} />
          </div>
        </div>

        <div className="row" style={{ marginTop: "152px" }}>
          <div className="col-lg-6 col-md-12">
            <Image src={g2} alt="gambar2" className="gambar2" />
          </div>
          <div className="col-lg-6 col-md-12" style={{ paddingTop: "30px", paddingLeft: "9vw" }}>
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
          <div className="col-lg-6 col-sm-12 p-3">
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
            <Image src={g3} alt="gambar3" className="gambar3" />
          </div>
        </div>
        {/*  */}
        <div className="" style={{ marginTop: "155px" }}>
          <div className="" style={{ textAlign: "center" }}>
            <h2>Their opinion about peworld</h2>

            <Carousel />
          </div>
        </div>
        {/*  */}
        <div className="d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "100%", height: "227px", borderRadius: "40px 8px 40px 8px", backgroundColor: "#5E50A1", padding: "10px" }}>
            <div className="d-flex justify-content-around align-items-center my-auto">
              <h2 style={{ color: "white" }}>Lorem ipsum dolor sit amet</h2>
              <Link href="/profileperusahaan">
                <button type="button" className="btn ml-1" style={{ height: "63px", backgroundColor: "white", padding: "10px 20px", cursor: "pointer", color: "#796EAF", marginLeft: "16px" }}>
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
