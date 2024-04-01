import NavbarProfile from "@/components/navbarprofile";
import React, { useEffect, useState } from "react";
import pp from "@/assets/img/profilepic.png";
import Image from "next/image";
import axios from "axios";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/footer";
import Link from "next/link";
import f1 from "@/assets/img/f1.png";
import tokped from "@/assets/img/tokped.png";

const Profile = () => {
  const [pekerja, setPekerja] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const [skill, setSkill] = useState([]);
  const [pengalaman, setPengalaman] = useState([]);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/pekerja`)
      .then((res) => {
        setPekerja(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/portofolio`)
      .then((res) => {
        setPortofolio(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/skill`)
      .then((res) => {
        setSkill(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/pengalaman`)
      .then((res) => {
        setPengalaman(res.data);
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
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-3 mb-3" />
                <div style={{ paddingLeft: "20px" }}>
                  {/* {JSON.stringify(pekerja)} */}
                  <h3>{pekerja.Name}</h3>
                  <h5>{pekerja.Pekerjaan}</h5>
                  <h5>
                    <Image src={pinmap} alt="pinmap" /> {pekerja.Alamat}
                  </h5>
                  <h5>{pekerja.Status}</h5>
                  <h5 className="mt-2 mb-3">{pekerja.Deskripsi}</h5>
                  <div className="text-center">
                    <Link href="/hire">
                      <Button style={{ backgroundColor: "#5E50A1", color: "white", width: "350px" }}>Hire</Button>
                    </Link>
                  </div>
                  <h3 className="mt-3">Skill</h3>
                  <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center" style={{ paddingRight: "20px" }}>
                    {/* {skill.Nama_skill} */}
                    {skill ? (
                      skill.map((item) => (
                        <div className="col card" style={{ backgroundColor: "#fdd074" }}>
                          {item.Nama_skill}
                        </div>
                      ))
                    ) : (
                      <p>loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded p-2">
                <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                  <Tab.Container defaultActiveKey="first">
                    <Row>
                      <Nav variant="underline" className="flex-row">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Portofolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Pengalaman Kerja</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center mt-4" style={{ paddingRight: "20px" }}>
                          {portofolio.map((item) => (
                            <div className="col">
                              <Card style={{ width: "219px" }}>
                                <Image src={f1} alt="forto1" />
                                <Card.Body>
                                  <Card.Title>{item.Namaaplikasi}</Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {pengalaman.map((item) => (
                          <div className="mt-4 mb-3 row d-flex flex-row flex-wrap" style={{ paddingRight: "20px" }}>
                            <div className="col-2" style={{ paddingTop: "20px", textAlign: "center" }}>
                              <Image src={tokped} alt="tokped" />
                            </div>

                            <div className="col-10">
                              <h3>{item.Posisi}</h3>
                              <h4>{item.Nama}</h4>
                              <p className="mt-3">{item.Desc}</p>
                            </div>
                          </div>
                        ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* grid
    row
    col1 = card biodata (nama,position,alamat,status,desc,btnhire, skills(1row1col),email,ig,github,linkend)
    col2 = card (tab portofolio & pengalaman kerja), tab porto= card isinya gambar+title, tab pengalaman= gambar,position,alamat,tgl,desc */}
      <Footer />
    </>
  );
};

export default Profile;
