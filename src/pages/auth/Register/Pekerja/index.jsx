import React from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const RegisterPekerja = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row" style={{ width: "1360px" }}>
          <div className="col-md-6">
            <div style={{ width: "650px", height: "700px", border: "1px solid #5E50A1", backgroundColor: "#5E50A1" }}>
              <Image src={bg1} alt="background1" style={{ width: "650px", height: "700px" }} />
            </div>
          </div>
          <div className="col-md-6" style={{ paddingTop: "10px", paddingRight: "100px" }}>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda iste facere amet doloremque a ipsum reprehenderit alias blanditiis quidem nemo ab.
            </p>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama panjang" />
                <Form.Label className="mt-2 mb-2">Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan alamat email" />
                <Form.Label className="mt-2 mb-2">No handphone</Form.Label>
                <Form.Control type="text" placeholder="Masukkan no handphone" />
                <Form.Label className="mt-2 mb-2">Kata Sandi</Form.Label>
                <Form.Control type="password" placeholder="Masukkan kata sandi" />
                <Form.Label className="mt-2 mb-2">Konfirmasi kata sandi</Form.Label>
                <Form.Control type="password" placeholder="Konfirmasi kata sandi" />
              </Form.Group>
              <Link href="/landingpage">
                <Button type="button" className="btn btn-warning mb-4 mt-3" style={{ color: "white", width: "570px" }}>
                  Daftar
                </Button>
              </Link>
              <p className="text-center">
                Anda sudah punya akun?
                <a className="p-2" style={{ color: "orange" }} href="/auth/Login">
                  Masuk disini
                </a>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPekerja;
