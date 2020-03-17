import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

import "font-awesome/css/font-awesome.min.css";

import Premi from "../components/modalPremi";

class Profile extends Component {
  constructor() {
    super();
    this.state = { value: 100 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <Col md="4">
          <Card border="secondary">
            <Card.Header>
              <Link to="/">
                <img src="/leftwhite.png" className="sm" alt="" />
              </Link>
              <img src="/7.jpg" className="avatar" alt="" /> &nbsp;Pet Profile
            </Card.Header>
            <Card.Body>
              <h3>Account Setting</h3>
              <hr />
              <Row>
                <Col md="3">
                  <b>Email</b>
                </Col>
                <Col md="9" className="text-right">
                  <b>95ahmadkhairul@gmail.com</b>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="4">
                  <b>Phone</b>
                </Col>
                <Col md="8" className="text-right">
                  <b>083822658482</b>
                </Col>
              </Row>
              <br />
              <h3>Discovery Setting</h3>
              <hr />
              <Row>
                <Col md="8">
                  <b>(Max Value : 100 Miles)</b>
                </Col>
                <Col md="4" className="text-right">
                  <b>{this.state.value} Miles</b>
                </Col>
              </Row>
              <p>
                <input
                  className="form-control"
                  type="range"
                  min="0"
                  max="100"
                  value={this.state.value}
                  onChange={this.handleChange}
                  step="1"
                />
              </p>
              <hr />
              <Form.Group>
                <label>Gender</label>
                <Form.Control as="select">
                  <option defaultValue>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <label>Age</label>
                <Form.Control as="select">
                  <option defaultValue>Adult</option>
                  <option>Child</option>
                  <option>Teenager</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <label>Species</label>
                <Form.Control as="select">
                  <option defaultValue>Bear</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Bear</option>
                  <option>Lion</option>
                </Form.Control>
              </Form.Group>
              <br />
              <Row>
                <Col md="12" className="text-center">
                  <Link to="/Landing">
                    <Button>Logout</Button>
                  </Link>
                </Col>
              </Row>
              <br />
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Col>
        <Col md="2"></Col>
      </Fragment>
    );
  }
}

class Profile2 extends Component {
  render() {
    return (
      <Col md="2" className="pd-top">
        <Premi />
      </Col>
    );
  }
}

export { Profile2 };
export default Profile;
