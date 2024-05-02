import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const { Email, Password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/login`, formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("userid", res.data.Email);
        // Cookies.set("userid", res.data.)
        // Cookies.set("role", res.data.)
      })
      .catch((err) => {
        console.log(err);
      });

    if (Email.trim() === "" || Password.trim() === "") {
      alert("Harap isi semua kolom form");
      return;
    }

    setToken("token saya");
    localStorage.setItem("token", Date.now());
    router.push("/landingpage");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // console.log(formData);
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
          <div className="col-lg-6">
            <div className="gambar" style={{}}>
              <Image src={bg1} alt="background1" style={{ width: "100%", height: "822px" }} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12" style={{ paddingTop: "106px", paddingLeft: "20px" }}>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda iste facere amet doloremque a ipsum reprehenderit alias blanditiis quidem nemo ab.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="lg" type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Masukkan alamat Email" />
                <Form.Label className="mt-4 mb-3">Kata Sandi</Form.Label>
                <Form.Control size="lg" type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder="Masukkan kata sandi" />
              </Form.Group>
              <a href="/auth/Reset/Password">
                <p className="mt-4 text-sm-end">Lupa kata sandi?</p>
              </a>
              <div style={{ textAlign: "center" }}>
                <Button type="submit" className="btn btn-warning mb-4" style={{ color: "white", width: "100%" }} disabled={Email.trim() === "" || Password.trim() === ""}>
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
