import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Premi() {
  const [paShow, setPaShow] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setPaShow(true)}>Add Pet</Button>
      <Modal
        size="sm"
        show={paShow}
        onHide={() => setPaShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Premium</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Upgrade your BreedNer account to enjoy PRO features</p>
          <Form>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Masukan No Rekening Kamu"
              />
            </Form.Group>
            <Form.Group style={{ textAlign: "center" }}>
              <div className="cst-up">
                <label for="up-tsf">
                  <p>
                    <i className="fa fa-camera fa-5x"></i>
                    <br />
                    Upload Bukti Transfer
                  </p>
                </label>
                <Form.Control type="file" id="up-tsf" />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Link to="petAdd" onClick={() => setPaShow(false)}>
            <Button>Submit</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Premi;
