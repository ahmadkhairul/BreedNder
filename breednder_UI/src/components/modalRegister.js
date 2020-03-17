import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { getSpecies } from "../_actions/species";

const App = ({ species, getSpecies }) => {
  const [rgShow, setRgShow] = useState(false);
  const { data, loading, error } = species;

  useEffect(() => {
    getSpecies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <h1>Error Found</h1>;

  if (loading) return <h1>Now loading</h1>;

  return (
    <Fragment>
      <Button onClick={() => setRgShow(true)}>Register</Button>
      <Modal
        size="sm"
        show={rgShow}
        onHide={() => setRgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Register</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Pet Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option defaultValue>Pet Species</option>
                {data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control as="textarea" rows="3" placeholder="Address" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button>Submit</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    species: state.species
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecies: () => dispatch(getSpecies())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
