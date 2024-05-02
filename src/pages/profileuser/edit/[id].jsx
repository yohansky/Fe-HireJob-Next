import NavbarLogin from "@/components/navbarlogin";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pp from "@/assets/img/profilepic.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import NavbarProfile from "@/components/navbarprofile";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const EditProfile = () => {
  // logika : saat klik edit profile userid disimpan di localstorage | form skill,project,experience mempunyai userid | userid yang di dapatkan dari localstorage | nanti ketika sudah post dari form; id experience, id skill, id project di set ke local storage | lalu di append ke relasi/kolom di tabel worker (ke id skill, id project, id experience)
  // logika : skill sudah many2many | ssat post skill masuk ke tabel skill, nanti id skillnya disimpan di var penampung/state | nanti di append dgn cara conver ke string baru dimasukkan ke tabel worker yang realsi dengan skill |
  const router = useRouter();
  const [pekerja, setPekerja] = useState([]);
  const [idWorker, setIdWorker] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    //useeffect akan membaca perubahan data
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userid"));
    // ambil userid dari getitem localstorage (sama seperti conditional rendering navbar di landingpage)
  }, [token, userId]);

  const [dataWorker, setDataWorker] = useState({
    Nama: "",
    JobDesk: "",
    Domisili: "",
    TempatKerja: "",
    Desc: "",
  });

  const [dataSkill, setDataSkill] = useState({
    Nama: "",
  });

  const [dataPengalaman, setDataPengalaman] = useState({
    Posisi: "",
    Perusahaan: "",
    Tahun: "",
    Deskripsi: "",
  });

  const [dataProject, setDataProject] = useState({
    Nama: "",
    Link: "",
    Tipe: "",
    Gambar: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/worker/${router.query.id}`, { withCredentials: true })
      .then((res) => {
        setPekerja(res.data);
        console.log(res.data);
        setIdWorker(res.data.id);
        console.log("ini id workernya :", res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeupdateWorker = (e) => {
    setDataWorker({
      ...dataWorker,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangecreateSkill = (e) => {
    setDataSkill({
      ...dataSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangecreateExperience = (e) => {
    setDataPengalaman({
      ...dataPengalaman,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangecreateProject = (e) => {
    setDataProject({
      ...dataProject,
      [e.target.name]: e.target.value,
    });
  };
  const handleRadioChange = (e) => {
    setDataProject({
      ...dataProject,
      Tipe: e.target.value, // Update nilai Tipe saat radio button dipilih
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpdateWorker = async (e) => {
    e.preventDefault();
    try {
      const worker = await axios.put(`http://localhost:8080/worker/${idWorker}`, dataWorker, { withCredentials: true });
      console.log(worker);
      alert("Update worker berhasil");
      // window.location.reload();
    } catch (err) {
      console.log(err.message);
      alert("update worker failed" + err.message);
    }
  };

  const handleCreateSkill = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("Nama", dataSkill.Nama);
    dataForm.append("WorkerId", idWorker);
    try {
      await axios.post(`http://localhost:8080/skills`, dataForm, { withCredentials: true });
      alert("Skill berhasil Ditambahkan");
    } catch (err) {
      console.log(err.message);
      alert("create Skill failed" + err.message);
    }
  };

  const handleCreateExperience = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("Posisi", dataPengalaman.Posisi);
    dataForm.append("Perusahaan", dataPengalaman.Perusahaan);
    dataForm.append("Tahun", dataPengalaman.Tahun);
    dataForm.append("Deskripsi", dataPengalaman.Deskripsi);
    dataForm.append("WorkerId", idWorker);
    try {
      await axios.post(`http://localhost:8080/experiences`, dataForm, { withCredentials: true });
      alert("Pengalaman berhasil Ditambahkan");
    } catch (err) {
      console.log(err.message);
      alert("create Pengalaman failed" + err.message);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("Nama", dataProject.Nama);
    dataForm.append("Link", dataProject.Link);
    dataForm.append("Tipe", dataProject.Tipe);
    dataForm.append("Gambar", selectedFile);
    dataForm.append("WorkerId", idWorker);
    try {
      await axios.post(`http://localhost:8080/projects`, dataForm, { withCredentials: true });
      alert("Project berhasil Ditambahkan");
    } catch (err) {
      console.log(err.message);
      alert("create Project failed" + err.message);
    }
  };

  return (
    <>
      {token && userId ? <NavbarProfile userId={userId} /> : <NavbarLogin />}
      <div style={{ backgroundColor: "#5E50A1", width: "100%", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute", top: "10px" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="card rounded p-2">
                <Image src={pp} alt="pp" style={{ alignSelf: "center" }} className="mt-4" />
                {/* buat kondisi ketika data workers belum ada, tambahkan button tambah nanti akan popup modal tambah */}
                <div style={{ paddingLeft: "20px" }} className="mb-3 mt-5">
                  <h3>{pekerja.nama}</h3>
                  <h6>{pekerja.jobdesk}</h6>
                  <h4>
                    {pekerja ? (
                      <div className="d-flex gap-2 mt-3">
                        <Image src={pinmap} alt="pinmap" /> <h6 style={{ color: "#9EA0A5" }}> {pekerja.domisili} </h6>
                      </div>
                    ) : (
                      <Image src={pinmap} alt="pinmap" style={{ display: "none" }} />
                    )}
                  </h4>
                  <h4>{pekerja.desc}</h4>
                </div>
              </div>

              <div className="mt-3" style={{ textAlign: "center" }}></div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <Form onSubmit={handleUpdateWorker}>
                  <div className="mt-3" style={{ marginLeft: "20px" }}>
                    <h4>Data Diri</h4>
                    <div style={{ marginTop: "35px" }}>
                      <Form.Group className="mb-4">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" name="Nama" value={dataWorker.Nama} placeholder="Masukkan nama lengkap" onChange={handleChangeupdateWorker} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Desk</Form.Label>
                        <Form.Control type="text" name="JobDesk" value={dataWorker.JobDesk} placeholder="Masukkan job desk" onChange={handleChangeupdateWorker} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Domisili</Form.Label>
                        <Form.Control type="text" name="Domisili" value={dataWorker.Domisili} placeholder="Masukkan domisili" onChange={handleChangeupdateWorker} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Tempat Kerja</Form.Label>
                        <Form.Control type="text" name="TempatKerja" value={dataWorker.TempatKerja} placeholder="Masukkan tempat kerja" onChange={handleChangeupdateWorker} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Deskripsi singkat</Form.Label>
                        <Form.Control as="textarea" name="Desc" value={dataWorker.Desc} rows={3} placeholder="Tuliskan deskripsi singkat" onChange={handleChangeupdateWorker} />
                      </Form.Group>
                    </div>
                    <div className="mt-4 mb-3" style={{ textAlign: "center" }}>
                      <Button type="submit" variant="outline-warning">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Skill</h4>
                  <Form onSubmit={handleCreateSkill}>
                    <Form.Group className="mb-4" controlId="">
                      <Row>
                        <Col>
                          <Form.Control type="text" name="Nama" value={dataSkill.Nama} placeholder="Masukkan Skill" onChange={handleChangecreateSkill} />
                        </Col>
                        <Col>
                          <Button type="submit" variant="warning">
                            Simpan
                          </Button>{" "}
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
                    <Form onSubmit={handleCreateExperience}>
                      <Form.Group className="mb-4">
                        <Form.Label>Posisi</Form.Label>
                        <Form.Control type="text" name="Posisi" value={dataPengalaman.Posisi} placeholder="Masukkan Posisi" onChange={handleChangecreateExperience} />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Row>
                          <Col>
                            <Form.Label>Nama Perusahaan</Form.Label>
                            <Form.Control type="text" name="Perusahaan" value={dataPengalaman.Perusahaan} placeholder="Masukkan Nama Perusahaan" onChange={handleChangecreateExperience} />
                          </Col>
                          <Col>
                            <Form.Label>Bulan/tahun</Form.Label>
                            <Form.Control type="date" name="Tahun" value={dataPengalaman.Tahun} placeholder="Masukkan Bulan/tahun" onChange={handleChangecreateExperience} />
                          </Col>
                        </Row>
                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Deskripsi singkat</Form.Label>
                          <Form.Control as="textarea" name="Deskripsi" value={dataPengalaman.Deskripsi} rows={3} placeholder="Deskripsikan pekerjaan anda" onChange={handleChangecreateExperience} />
                        </Form.Group>
                      </Form.Group>
                      <div className="mt-4 mb-3" style={{ textAlign: "center" }}>
                        <Button type="submit" variant="outline-warning">
                          Tambah pengalaman kerja
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="card rounded p-2 mb-3" style={{ marginLeft: "10px" }}>
                <div className="mt-3" style={{ marginLeft: "20px" }}>
                  <h4>Portofolio</h4>
                  <div style={{ marginTop: "35px" }}>
                    <Form onSubmit={handleCreateProject}>
                      <Form.Group className="mb-4">
                        <Form.Label>Nama aplikasi</Form.Label>
                        <Form.Control type="text" name="Nama" value={dataProject.Nama} placeholder="Masukkan nama aplikasi" onChange={handleChangecreateProject} />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Link repository</Form.Label>
                        <Form.Control type="text" name="Link" value={dataProject.Link} placeholder="Masukkan link repository" onChange={handleChangecreateProject} />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Type portofolio</Form.Label>
                        {/* {["radio"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Aplikasi mobile" name="Tipe" type={type} id={`inline-${type}-1`} checked={dataProject.Tipe === "Aplikasi Mobile"} onChange={handleRadioChange} />
                            <Form.Check inline label="Aplikasi web" name="Tipe" type={type} id={`inline-${type}-2`} checked={dataProject.Tipe === "Aplikasi Web"} onChange={handleRadioChange} />
                          </div>
                        ))} */}
                        <div className="mb-3">
                          <Form.Check inline label="Aplikasi mobile" name="Tipe" type="radio" id="radio-mobile" value="Aplikasi Mobile" checked={dataProject.Tipe === "Aplikasi Mobile"} onChange={handleRadioChange} />
                          <Form.Check inline label="Aplikasi web" name="Tipe" type="radio" id="radio-web" value="Aplikasi Web" checked={dataProject.Tipe === "Aplikasi Web"} onChange={handleRadioChange} />
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>Upload gambar</Form.Label>
                        <Form.Control type="file" name="Gambar" id="file-input" accept=".png,.jpg,.jpeg" onChange={handleFileChange} />
                      </Form.Group>
                      <div className="mt-4 mb-3" style={{ textAlign: "center" }}>
                        <Button type="submit" variant="outline-warning">
                          Tambah portofolio
                        </Button>
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
