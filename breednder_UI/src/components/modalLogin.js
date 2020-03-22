import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";

import { postLogin } from "../_actions/auth";

const App = ({ login, postLogin }) => {
  const [lgShow, setLgShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = login;

  return (
    <Fragment>
      <Button onClick={() => setLgShow(true)}>Login</Button>
      <Modal
        size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Login</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error === true ? <h6>Username or Password Wrong</h6> : <></>}
          {loading === true ? <h6>Now Loading</h6> : <></>}
          <Form
            onSubmit={event => {
              event.preventDefault();
              postLogin({ email, password });
            }}
          >
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Fragment>
  );
};

// export default Login;
const mapStateToProps = state => {
  return {
    login: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: value => dispatch(postLogin(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
