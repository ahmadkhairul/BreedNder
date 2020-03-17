import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { postLogin } from "../_actions/login";

const App = ({ login, postLogin }) => {
  const [emailValue, emailSetValue] = useState("");
  const [passwordValue, passwordSetValue] = useState("");
  const { data, loading, error } = login;
  const [lgShow, setLgShow] = useState(false);

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
          {error === true ? <h6>Email or Password Wrong</h6> : <></>}
          {loading === true ? <h6>Now Loading</h6> : <></>}
          {data.token != null ? <>{<Redirect to="/"></Redirect>}</> : <></>}
          <Form
            onSubmit={event => {
              postLogin({ emailValue, passwordValue });
              event.preventDefault();
            }}
          >
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                value={emailValue}
                onChange={event => {
                  emailSetValue(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={event => {
                  passwordSetValue(event.target.value);
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
    login: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: user => dispatch(postLogin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
