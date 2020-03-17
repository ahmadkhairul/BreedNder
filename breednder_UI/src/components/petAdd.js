import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

function PetAdd() {
  return (
    <Fragment>
      <Col md="4">
        <Card border="secondary">
          <Card.Header>Add New Pet</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  value="Ahmad Khairul Anwar"
                  readonly
                />
              </Form.Group>
              <Form.Group style={{ textAlign: "center" }}>
                <div className="cst-up">
                  <label for="bTr-Up">
                    <p>
                      <i class="fa fa-camera fa-5x"></i>
                      <br />
                      Upload Your Pet Photo
                    </p>
                  </label>
                  <Form.Control type="file" id="bTr-Up" />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Pet Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control as="select">
                  <option defaultValue readOnly>
                    Species
                  </option>
                  <option>Mamals</option>
                  <option>Fish</option>
                  <option>Avian</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select">
                  <option defaultValue readOnly>
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="select">
                  <option defaultValue readOnly>
                    Age
                  </option>
                  <option>Adult</option>
                  <option>Teenager</option>
                  <option>Child</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control as="textarea" rows="3" placeholder="About Pet" />
              </Form.Group>
            </Form>
            <Row>
              <Col md="12" style={{ textAlign: "center" }}>
                <Link to="/PetProfile">
                  <Button>Save</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
}

export default PetAdd;
