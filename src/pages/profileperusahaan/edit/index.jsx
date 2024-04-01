import NavbarProfile from "@/components/navbarprofile";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pp from "@/assets/img/profilepic.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";

const EditPerusahaan = () => {
  const [Perusahaan, setPerusahaan] = useState([]);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/perusahaan`)
      .then((res) => {
        setPerusahaan(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavbarProfile />
      <div style={{ backgroundColor: "#5E50A1", width: "1488px", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">
            <div className="col-4">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-4" />
                <a href="" style={{ alignSelf: "center" }}>
                  <p style={{ color: "#9EA0A5" }}>Edit</p>
                </a>
                {/* {JSON.stringify(pekerja)} */}
                <div style={{ paddingLeft: "20px" }} className="mb-3">
                  <h2>{Perusahaan.Namaperusahaan}</h2>
                  <h4>{Perusahaan.Bidang}</h4>
                  <h4>
                    <Image src={pinmap} alt="pinmap" /> {Perusahaan.Alamat}
                  </h4>
                </div>
              </div>
              <div className="mt-3" style={{ textAlign: "center" }}>
                <Button style={{ width: "357px", height: "50px" }}>Simpan</Button>
                <Button className="mt-2" style={{ width: "357px", height: "50px" }}>
                  Batal
                </Button>
              </div>
            </div>
            <div className="col">
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Data Diri</h4>
                  <div style={{ marginTop: "35px" }}>
                    <Form>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama Perusahaan</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama perusahaan" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Bidang</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan bidang perusahaan ex : Financial" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Alamat" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Deskripsi singkat</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Tuliskan deskripsi singkat" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan email" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nomor telepon" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Linkedin</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama Linkedin" />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPerusahaan;
