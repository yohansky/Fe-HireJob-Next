import NavbarLogin from "@/components/navbarlogin";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pp from "@/assets/img/profilepic.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import NavbarProfile from "@/components/navbarprofile";
import Footer from "@/components/footer";

const EditProfile = () => {
  // logika : saat klik edit profile userid disimpan di localstorage | form skill,project,experience mempunyai userid | userid yang di dapatkan dari localstorage | nanti ketika sudah post dari form; id experience, id skill, id project di set ke local storage | lalu di append ke relasi/kolom di tabel worker (ke id skill, id project, id experience)
  const [pekerja, setPekerja] = useState([]);

  useEffect(() => {
    axios
      .get(`https://template-dummby-json.vercel.app/pekerja`)
      .then((res) => {
        setPekerja(res.data[0]);
        // tipedata json = array of object [{}],bukan id
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* EditProfile
    grid
    row
    col1 = card=tag a edit, nama, position, alamat, status, btnsimpan,btn batal
    col2 = card= form input, card=skill, card=form btntambah,card= form+radio btntambah  */}
      <NavbarProfile />
      <div style={{ backgroundColor: "#5E50A1", width: "100%", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-4" />
                <a href="" style={{ alignSelf: "center" }}>
                  <p style={{ color: "#9EA0A5" }}>Edit</p>
                </a>
                {/* {JSON.stringify(pekerja)} */}
                <div style={{ paddingLeft: "20px" }} className="mb-3">
                  <h2>{pekerja.Name}</h2>
                  <h4>{pekerja.Pekerjaan}</h4>
                  <h4>
                    <Image src={pinmap} alt="pinmap" /> {pekerja.Alamat}
                  </h4>
                  <h4>{pekerja.Status}</h4>
                </div>
                <Button style={{ width: "100%", height: "50px" }}>Simpan</Button>
                <Button className="mt-2" style={{ width: "100%", height: "50px" }}>
                  Batal
                </Button>
              </div>

              <div className="mt-3" style={{ textAlign: "center" }}></div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Data Diri</h4>
                  <div style={{ marginTop: "35px" }}>
                    <Form>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama lengkap" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Job Desk</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan job desk" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Domisili</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan domisili" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tempat Kerja</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan tempat kerja" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Deskripsi singkat</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Tuliskan deskripsi singkat" />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Skill</h4>
                  <Form>
                    <Form.Group className="mb-4" controlId="">
                      <Row>
                        <Col>
                          <Form.Control type="text" placeholder="Masukkan Skill" />
                        </Col>
                        <Col>
                          <Button variant="warning">Simpan</Button>{" "}
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Pengalaman Kerja</h4>
                  <div style={{ marginTop: "35px" }}>
                    <Form>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Posisi</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Posisi" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Row>
                          <Col>
                            <Form.Label>Nama Perusahaan</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan PT" />
                          </Col>
                          <Col>
                            <Form.Label>Bulan/tahun</Form.Label>
                            <Form.Control type="date" placeholder="Masukkan Bulan/tahun" />
                          </Col>
                        </Row>
                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Deskripsi singkat</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Deskripsikan pekerjaan anda" />
                        </Form.Group>
                      </Form.Group>
                      <div className="mt-4 mb-3" style={{ textAlign: "center" }}>
                        <Button variant="outline-warning">Tambah pengalaman kerja</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Portofolio</h4>
                  <div style={{ marginTop: "35px" }}>
                    <Form>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama aplikasi</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama aplikasi" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link repository</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan link repository" />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Type portofolio</Form.Label>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Aplikasi mobile" name="group1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Aplikasi web" name="group1" type={type} id={`inline-${type}-2`} />
                          </div>
                        ))}
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Upload gambar</Form.Label>
                        <Form.Control type="file" id="file-input" accept=".png,.jpg,.jpeg" />
                      </Form.Group>
                      <div className="mt-4 mb-3" style={{ textAlign: "center" }}>
                        <Button variant="outline-warning">Tambah portofolio</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
