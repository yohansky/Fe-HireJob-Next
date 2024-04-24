import Image from "next/image";
import React from "react";
import iconputih from "@/assets/img/iconputih.png";

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <div style={{ height: "100%", border: "1px solid #5E50A1", backgroundColor: "#5E50A1" }}>
          <div className="container">
            <div className="d-flex ">
              <div className="p-2 my-3" style={{ width: "100%" }}>
                <Image src={iconputih} alt="footer1" />

                <p className="col-4" style={{ marginTop: "30px", color: "white" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus culpa ab, eius voluptatum suscipit accusantium nostrum unde optio cum? Mollitia maxime illum minus libero suscipit saepe ratione soluta quod.
                </p>

                <div style={{ border: "1px solid white", width: "80%", marginTop: "67px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
