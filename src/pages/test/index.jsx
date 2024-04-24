import ModalEdit from "@/components/modalEdit";
import createWorker from "@/configs/redux/actions/createPekerjaAction";
import deleteWorker from "@/configs/redux/actions/deletePekerjaAction";
// import createPekerja from "@/configs/redux/actions/createPekerjaAction";
import getWorker from "@/configs/redux/actions/pekerjaAction";
import updatePekerja from "@/configs/redux/actions/updatePekerjaAction";
// import getPekerja from "@/configs/redux/actions/pekerjaAction";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { worker } = useSelector((state) => state.worker);
  console.log(worker);
  const [formData, setFormData] = useState({
    JobDesc: "",
    JobType: "",
    CompanyName: "",
    Skill: "",
    UserId: 0,
  });

  // create
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Delete
  const handleDelete = (id) => {
    dispatch(deleteWorker(id));
    handleClose();
  };
  //parameternya harus sesuai

  // CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createWorker(formData));
    window.location.reload();
  };

  //  GET
  useEffect(() => {
    dispatch(getWorker());
  }, []);

  return (
    <div>
      {JSON.stringify(worker)}
      <div className="mt-4" style={{ marginTop: "15px", marginLeft: "30px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>JobDesc</Form.Label>
            <Form.Control type="text" name="JobDesc" value={formData.JobDesc} placeholder="Masukkan Jobdesc" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>JobType</Form.Label>
            <Form.Control type="text" name="JobType" value={formData.JobType} placeholder="Masukkan JobType" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CompanyName</Form.Label>
            <Form.Control type="text" name="CompanyName" value={formData.CompanyName} placeholder="Masukkan Company Name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Skill</Form.Label>
            <Form.Control type="text" name="Skill" value={formData.Skill} placeholder="Masukkan Skill" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>UserId</Form.Label>
            <Form.Control type="text" name="UserId" value={formData.UserId} placeholder="Masukkan UserId" onChange={handleChange} />
          </Form.Group>
          <Button type="submit" variant="warning">
            Tambah
          </Button>
        </Form>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>JobDesc</th>
              <th>JobType</th>
              <th>CompanyName</th>
              <th>Skill</th>
              <th>UserID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {worker ? (
              worker.map((item, index) => (
                <tr key={item.ID} className="text-center">
                  <th scope="row">{index + 1}</th>
                  <td>{item.JobDesc}</td>
                  <td>{item.JobType}</td>
                  <td>{item.CompanyName}</td>
                  <td>{item.Skill}</td>
                  <td>{item.UserId}</td>
                  {/* <td>{item.User}</td> */}
                  <td className="text-center">
                    {/* Delete */}
                    <Button variant="danger" onClick={handleShow}>
                      Hapus
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Beneran mau dihapus brok ini?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        {/* perhatikan pembuatan onclick handleDeletenya!! */}
                        <Button variant="danger" onClick={() => handleDelete(item.ID)}>
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* Update perhatikan idnya huruf kecil*/}
                    <ModalEdit id={item.ID} JobDesc={item.JobDesc} JobType={item.JobType} CompanyName={item.CompanyName} Skill={item.Skill}>
                      Edit
                    </ModalEdit>
                  </td>
                </tr>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Test;
