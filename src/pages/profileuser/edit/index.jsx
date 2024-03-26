import NavbarLogin from "@/components/navbarlogin";
import React from "react";
import Image from "next/image";
import pp from "@/assets/img/profilepic.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button } from "react-bootstrap";

const EditProfile = () => {
  return (
    <>
      {/* EditProfile
    grid
    row
    col1 = card=tag a edit, nama, position, alamat, status, btnsimpan,btn batal
    col2 = card= form input, card=skill, card=form btntambah,card= form+radio btntambah  */}
      <NavbarLogin />
      <div style={{ backgroundColor: "#5E50A1", width: "1488px", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row border">
            <div className="col-4 border">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} />
                <a href="" style={{ alignSelf: "center" }}>
                  <p style={{ color: "#9EA0A5" }}>Edit</p>
                </a>
                <h2>Louis Tomlinson</h2>
                <h4>Web Developer</h4>
                <h4>
                  <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                </h4>
                <h4>Freelancer</h4>
              </div>
              <div className="mt-3" style={{ textAlign: "center" }}>
                <Button style={{ width: "357px", height: "50px" }}>Simpan</Button>
                <Button className="mt-2" style={{ width: "357px", height: "50px" }}>
                  Batal
                </Button>
              </div>
            </div>
            <div className="col border">
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                Data Diri
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                Skill
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                Pengalaman Kerja
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                Portofolio
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
