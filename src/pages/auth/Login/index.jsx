import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Harap isi semua kolom form");
      return;
    }
    setToken("token saya");
    localStorage.setItem("token", Date.now());
    router.push("/landingpage");
  };

  useEffect(() => {
    if (token) {
      router.push("/landingpage");
    }
  }, [token, router]);
  return (
    <>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row border">
          <div className="col-md-6">
            <div style={{}}>
              <Image className="gambar" src={bg1} alt="background1" style={{ width: "650px", height: "822px" }} />
            </div>
          </div>
          <div className="col-md-6" style={{ paddingTop: "106px", paddingLeft: "70px" }}>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda iste facere amet doloremque a ipsum reprehenderit alias blanditiis quidem nemo ab.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="lg" type="email" name="email" value={email} onChange={handleChange} placeholder="Masukkan alamat Email" />
                <Form.Label className="mt-4 mb-3">Kata Sandi</Form.Label>
                <Form.Control size="lg" type="password" name="password" value={password} onChange={handleChange} placeholder="Masukkan kata sandi" />
              </Form.Group>
              <a href="/auth/Reset/Password">
                <p className="mt-4 text-sm-end">Lupa kata sandi?</p>
              </a>
              <div style={{ textAlign: "center" }}>
                <Button type="submit" className="btn btn-warning mb-4" style={{ color: "white", width: "200px" }} disabled={email.trim() === "" || password.trim() === ""}>
                  {/* href="/landingpage" */}
                  Masuk
                </Button>
              </div>

              <p className="text-center">
                Anda belum punya akun?
                <a className="p-2" style={{ color: "orange" }} href="/auth/Register/Pekerja">
                  Daftar disini
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
