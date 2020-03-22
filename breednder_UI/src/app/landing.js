import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Login from "../components/modalLogin";
import Register from "../components/modalRegister";

const App = ({ auth }) => {
  const { isLogin, data } = auth;
  return (
    <div className="landing">
      <Row>
        <Col md="4" className="text-center">
          <h3>BreedNder</h3>
        </Col>
        <Col md="4"></Col>
        <Col md="4" className="text-center">
          <h3> {isLogin === true ? `Hi, ${data.breeder}` : <Login />}</h3>
        </Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="8" className="text-center">
          <p>Swipe Right</p>
          <p>Make Your Pet Happy</p>
          <i>
            by Clicking enter, you agree to our terms. Learn how we process your
            data in our Privacy Policy and Cookie Policy
          </i>
          <p></p>
          <h3>
            {isLogin === true ? (
              <Link to="/">
                <Button>Home</Button>
              </Link>
            ) : (
              <Register />
            )}
          </h3>
        </Col>
        <Col md="2"></Col>
      </Row>
      <footer className="footer text-center">FIND YOUR PET'S MATCH!</footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //authUser: () => dispatch(authUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
