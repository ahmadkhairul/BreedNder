import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Login from "../components/modalLogin";
import Register from "../components/modalRegister";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Row>
          <Col md="4" className="text-center">
            <h3>BreedNder</h3>
          </Col>
          <Col md="4"></Col>
          <Col md="4" className="text-center">
            <Login />
          </Col>
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col md="8" className="text-center">
            <p>Swipe Right</p>
            <p>Make Your Pet Happy</p>
            <i>
              by Clicking enter, you agree to our terms. Learn how we process
              your data in our Privacy Policy and Cookie Policy
            </i>
            <p></p>
            <Register />
          </Col>
          <Col md="2"></Col>
        </Row>
        <footer className="footer text-center">FIND YOUR PET'S MATCH!</footer>
      </div>
    );
  }
}

export default Landing;
