import updatePekerja from "@/configs/redux/actions/updatePekerjaAction";
import React, { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ModalEdit = ({ children, id, JobDesc, JobType, CompanyName, Skill }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    JobDesc,
    JobType,
    CompanyName,
    Skill,
  });

  const handleChangeupdate = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePekerja(data, id));
    handleClose();
  };
  return (
    <Fragment>
      <Button variant="info" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>JobDesc</Form.Label>
              <Form.Control type="text" name="JobDesc" value={data.JobDesc} placeholder="Masukkan Jobdesc" id={id} onChange={handleChangeupdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>JobType</Form.Label>
              <Form.Control type="text" name="JobType" value={data.JobType} placeholder="Masukkan JobType" id={id} onChange={handleChangeupdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CompanyName</Form.Label>
              <Form.Control type="text" name="CompanyName" value={data.CompanyName} placeholder="Masukkan Company Name" id={id} onChange={handleChangeupdate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skill</Form.Label>
              <Form.Control type="text" name="Skill" value={data.Skill} placeholder="Masukkan Skill" id={id} onChange={handleChangeupdate} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="info" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default ModalEdit;
