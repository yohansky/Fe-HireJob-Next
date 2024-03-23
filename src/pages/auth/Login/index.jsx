import React from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row border">
          <div className="col-md-6">
            <div style={{ width: "650px", height: "700px", border: "1px solid #5E50A1", backgroundColor: "#5E50A1" }}>
              <Image src={bg1} alt="background1" style={{ width: "650px", height: "700px" }} />
            </div>
          </div>
          <div className="col-md-6" style={{ paddingTop: "106px", paddingLeft: "70px" }}>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda iste facere amet doloremque a ipsum reprehenderit alias blanditiis quidem nemo ab.
            </p>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control size="lg" type="email" placeholder="Masukkan alamat Email" />
                <Form.Label className="mt-4 mb-3">Kata Sandi</Form.Label>
                <Form.Control size="lg" type="password" placeholder="Masukkan kata sandi" />
              </Form.Group>
              <p className="mt-4 text-sm-end">Lupa kata sandi?</p>
              <Link href="/landingpage">
                <Button type="button" className="btn btn-warning mb-4" style={{ color: "white", width: "570px" }}>
                  Masuk
                </Button>
              </Link>
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
