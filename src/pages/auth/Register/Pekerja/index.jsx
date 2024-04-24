import React, { useState } from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";

const RegisterPekerja = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    handphone: "",
    password: "",
    confirmPassword: "",
  });

  const { nama, email, handphone, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika validasi di sini, misalnya:
    if (nama.trim() === "" || email.trim() === "" || handphone.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Harap isi semua kolom formulir.");
      return;
    }
    // Lanjutkan dengan proses pendaftaran jika formulir valid
    // contoh: panggil fungsi daftarPekerja() atau kirim data ke backend
  };

  return (
    <>
      <div className="container tengah" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="gambar" style={{ width: "100%", height: "700px" }}>
              <Image src={bg1} alt="background1" style={{ width: "100%", height: "700px" }} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 p-3" style={{ paddingTop: "10px", paddingRight: "100px" }}>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda iste facere amet doloremque a ipsum reprehenderit alias blanditiis quidem nemo ab.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="nama" value={nama} onChange={handleChange} placeholder="Masukkan nama panjang" />
                <Form.Label className="mt-2 mb-2">Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleChange} placeholder="Masukkan alamat email" />
                <Form.Label className="mt-2 mb-2">No handphone</Form.Label>
                <Form.Control type="text" name="handphone" value={handphone} onChange={handleChange} placeholder="Masukkan no handphone" />
                <Form.Label className="mt-2 mb-2">Kata Sandi</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleChange} placeholder="Masukkan kata sandi" />
                <Form.Label className="mt-2 mb-2">Konfirmasi kata sandi</Form.Label>
                <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Konfirmasi kata sandi" />
              </Form.Group>
              <Button
                type="submit"
                className="btn btn-warning mb-4 mt-3"
                style={{ color: "white", width: "100%" }}
                disabled={nama.trim() === "" || email.trim() === "" || handphone.trim() === "" || password.trim() === "" || confirmPassword.trim() === ""}
                href="/auth/Login"
              >
                Daftar
              </Button>
            </Form>
            <p className="text-center">
              Anda sudah punya akun?{" "}
              <a className="p-2" style={{ color: "orange" }} href="/auth/Login">
                Masuk disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPekerja;
