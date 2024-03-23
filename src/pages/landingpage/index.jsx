import React from "react";
import { Nav, Button } from "react-bootstrap";
import icon from "@/assets/img/icon.png";
import g1 from "@/assets/img/g1.png";
import Image from "next/image";
import g2 from "@/assets/img/g2.png";

const LandingPage = () => {
  return (
    <>
      <Nav>
        <div className="container mt-4">
          <Image src={icon} alt="Logo1" />
        </div>
      </Nav>
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
        {/*  */}
        <div className="row" style={{ marginTop: "172px" }}>
          <div className="col-6">
            <Image src={g2} alt="gambar2" style={{}} />
          </div>
          <div className="col-6">
            <h2>Kenapa harus mencari tallent di peworld</h2>
            <p style={{ marginTop: "36px" }}>
              <Image src={require("@/assets/img/checklist.png")} alt="checklist" /> Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
