import NavbarLogin from "@/components/navbarlogin";
import NavbarProfile from "@/components/navbarprofile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import miniprofile from "@/assets/img/miniprofile.png";
import pinmap from "@/assets/img/pinmap.png";
import Link from "next/link";
import Footer from "@/components/footer";
import axios from "axios";

const Home = () => {
  const [pekerja, setPekerja] = useState([]);
  const [skill, setSkill] = useState([]);
  const [user, setUser] = useState([]);
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
      .get(`http://localhost:8080/workers`, { withCredentials: true })
      .then((res) => {
        setPekerja(res.data.data);
        console.log(res.data.data);
        // const workers = setPekerja.filter((user) => user.Role === "Worker")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get user
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayedUsers = user.slice(0, 6);
  const displayedWorkers = pekerja.slice(0, 6);

  return (
    <>
      {token && userId ? <NavbarProfile userId={userId} /> : <NavbarLogin />}

      <div style={{ backgroundColor: "#5E50A1", width: "100%", height: "100px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container ">
        <div style={{ marginTop: "60px", zIndex: "1", position: "relative" }}>
          <h2 style={{ color: "white", paddingTop: "10px" }}>Top Jobs</h2>
        </div>
        <div style={{ marginTop: "80px" }}>
          <div className="card">
            <InputGroup>
              <Form.Control size="lg" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
              <Button variant="outline-secondary">Kategori</Button>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup>
            {/* {JSON.stringify(user)} */}
            {/* {JSON.stringify(pekerja)} */}
          </div>
        </div>
        {/*  */}

        <div className="mt-4" style={{ marginTop: "50px" }}>
          <div className="card">
            {displayedWorkers ? (
              displayedWorkers.map((item) => (
                <div key={item.id} className="row cardhome">
                  <div className="col-lg-1 col-md-2 col-sm-2">
                    <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
                  </div>

                  <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                    <h4>{item.nama}</h4>
                    <p>
                      {item.jobdesk} at {item.tempatkerja}
                    </p>
                    <Image src={pinmap} alt="pinmap" /> {item.domisili}
                    <div className="row mt-2 mb-3" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                      {item.Skill.map((skill) => (
                        <div className="col-lg-6 mb-3" style={{ flexBasis: "30%" }}>
                          <div className="card" style={{ width: "100%", height: "100%", backgroundColor: "#FBB017" }}>
                            <p className="mx-auto my-auto">{skill.nama}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                    <Link href={`/findworker/${item.id}`}>
                      <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                        Lihat Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading ...</p>
            )}

            {/* <div className="row cardhome">
              <div className="col-lg-1 col-md-2 col-sm-2">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>

              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <Link href={"/profileuser"}>
                  <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                    Lihat Profile
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div>
            
            <div className="row ">
              <div className="col-lg-1 col-md-2 col-sm-2 ">
                <Image src={miniprofile} alt="miniprofile" className="mx-2" style={{ marginTop: "30px" }} />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-6" style={{ paddingLeft: "50px", paddingTop: "10px" }}>
                <h4>Louis Tomlinson</h4>
                <p>Web developer</p>
                <Image src={pinmap} alt="pinmap" /> Purwokerto, Jawa tengah
                <div className="row mt-2 mb-3">
                  <div className="col">
                    <div className="card" style={{ width: "70px", height: "28px", backgroundColor: "#FBB017" }}>
                      <p className="me-auto mx-auto">PHP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4" style={{ paddingTop: "50px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Lihat Profile
                </button>
              </div>
            </div> */}
            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
