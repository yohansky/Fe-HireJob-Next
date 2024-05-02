import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavbarProfile from "@/components/navbarprofile";
import pp from "@/assets/img/profilepic.png";
import Image from "next/image";
import axios from "axios";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Footer from "@/components/footer";
import Link from "next/link";
import f1 from "@/assets/img/f1.png";
import tokped from "@/assets/img/tokped.png";
import { useParams } from "next/navigation";
import NavbarLogin from "@/components/navbarlogin";

const FindWorker = () => {
  const router = useRouter();
  //   const { id } = router.query;
  const [user, setUser] = useState([]);
  const [pekerja, setPekerja] = useState([]);
  const [idWorker, setIdWorker] = useState([]);
  const [skill, setSkill] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const [pengalaman, setPengalaman] = useState([]);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //useeffect akan membaca perubahan data
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    // ambil userid dari getitem localstorage (sama seperti conditional rendering navbar di landingpage)
  }, [token, userId]);

  //logika : kan userid sudah didapat di local storgare | nanti masukkan di param endpoint "?UserId=${localstorage.userid}"
  //saat masuk halaman ini juga ahrus setlocalstorage untuk user worker

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${router.query.id}`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        // console.log(res.data);
        //buat kondisi
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/worker/${router.query.id}`, { withCredentials: true })
      .then((res) => {
        setPekerja(res.data);
        // console.log(pekerja);
        setIdWorker(res.data.id);
        console.log(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (idWorker !== null) {
      axios
        .get(`http://localhost:8080/worker/${idWorker}/projects`, { withCredentials: true })
        .then((res) => {
          setPortofolio(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idWorker]);

  useEffect(() => {
    if (idWorker !== null) {
      axios
        .get(`http://localhost:8080/worker/${idWorker}/experiences`, { withCredentials: true })
        .then((res) => {
          setPengalaman(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idWorker]);

  return (
    <>
      {token && userId ? <NavbarProfile userId={userId} /> : <NavbarLogin />}
      <div style={{ backgroundColor: "#5E50A1", width: "100%", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute", top: "10px" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-3 mb-3" />
                <div style={{ paddingLeft: "20px" }}>
                  {/* {JSON.stringify(pekerja)} */}
                  {/* untuk mengambil object(relasi) di dalam object */}
                  <h3>{pekerja.nama} </h3>
                  <h5>{pekerja.jobdesk}</h5>
                  <h5>
                    <Image src={pinmap} alt="pinmap" /> {pekerja.domisili}
                  </h5>
                  <h5>{pekerja.jobdesk}</h5>
                  <h5 className="mt-2 mb-3">{pekerja.desc}</h5>
                  <div className="text-center">
                    <Link href={`/hire/${pekerja.id}`}>
                      <Button style={{ backgroundColor: "#5E50A1", color: "white", width: "100%" }}>Hire</Button>
                    </Link>
                  </div>
                  <h3 className="mt-3">Skill</h3>
                  <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center" style={{ paddingRight: "20px" }}>
                    {pekerja.Skill?.map((skill) => (
                      <div className="col-lg-6 mb-3" style={{ flexBasis: "30%" }}>
                        <div className="card" style={{ width: "100%", height: "100%", backgroundColor: "#FBB017" }}>
                          <p className="mx-auto my-auto">{skill.nama}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 cardmd">
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
                              {/* {JSON.stringify(portofolio)} */}
                              <Card style={{ width: "219px" }}>
                                <Image src={f1} alt="forto1" />
                                <Card.Body>
                                  <Card.Title>{item.nama}</Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {pengalaman.map((item) => (
                          <div className="mt-4 mb-3 row flex-wrap" style={{ paddingRight: "20px" }}>
                            {/* {JSON.stringify(pengalaman)} */}
                            <div className="col-lg-2 col-md-2" style={{ paddingTop: "20px", textAlign: "center" }}>
                              <Image src={tokped} alt="tokped" />
                            </div>

                            <div className="col-lg-10 col-md-10">
                              <h3>{item.posisi}</h3>
                              <h4>
                                {item.perusahaan} {item.tahun}
                              </h4>
                              <p className="mt-3">{item.deskripsi}</p>
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

export default FindWorker;
