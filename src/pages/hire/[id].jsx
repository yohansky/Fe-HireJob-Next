import NavbarProfile from "@/components/navbarprofile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pp from "@/assets/img/profilepic.png";
import axios from "axios";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Dropdown, Form } from "react-bootstrap";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import NavbarLogin from "@/components/navbarlogin";

const HireDetail = () => {
  const router = useRouter();
  const [pekerja, setPekerja] = useState([]);
  const [skill, setSkill] = useState([]);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //useeffect akan membaca perubahan data
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    // ambil userid dari getitem localstorage (sama seperti conditional rendering navbar di landingpage)
  }, [token, userId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/worker/${router.query.id}`, { withCredentials: true })
      .then((res) => {
        setPekerja(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(`https://template-dummby-json.vercel.app/skill`)
  //       .then((res) => {
  //         setSkill(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  // const displayedSkills = skill.slice(0, 12);

  return (
    <div style={{ backgroundColor: "#f6f7f8" }}>
      {token && userId ? <NavbarProfile userId={userId} /> : <NavbarLogin />}

      <div className="container">
        <div style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-3 mb-3" />
                <div style={{ paddingLeft: "20px" }}>
                  {/* {JSON.stringify(pekerja)} */}
                  <h3>{pekerja.nama}</h3>
                  <h5>{pekerja.jobdesk}</h5>
                  <h5>
                    <Image src={pinmap} alt="pinmap" /> {pekerja.domisili}
                  </h5>
                  <h5>{pekerja.jobdesk}</h5>
                  <h5 className="mt-2">{pekerja.desc}</h5>
                  <h3 className="mt-3">Skill</h3>
                  <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center" style={{ paddingRight: "20px" }}>
                    {/* {skill.Nama_skill} */}
                    {/* {skill.map((item) => ( */}
                    <div className="col card">{pekerja.Skill?.nama}</div>
                    {/* ))} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 mt-md-3" style={{ paddingRight: "10px", paddingLeft: "40px" }}>
              <h2>Hubungi {pekerja.nama}</h2>
              <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id explicabo animi porro vel maxime minus dolore rerum? Hic quo ea autem dicta incidunt! Earum rerum hic ab quisquam tempore nulla?</p>
              <div className="mt-4">
                <Form>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tujuan tentang pesan ini</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Projek</option>
                      <option value="1">Kontrak</option>
                      <option value="2">Pegawai Tetap</option>
                      <option value="3">Magang</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan nama lengkap" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukkan email" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama No Handphone</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan no handphone" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Deskripsikan/jelaskan lebih detail" />
                  </Form.Group>
                  <div className="text-center ">
                    <Button variant="warning" style={{ color: "white", width: "80%" }}>
                      Hire
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HireDetail;
