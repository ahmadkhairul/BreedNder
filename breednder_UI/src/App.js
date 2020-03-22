import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

import Landing from "./app/landing";
import Index from "./app/index";

import Profile, { Profile2 } from "./app/profile";
import PetProfile from "./components/petProfile";
import PetEdit from "./components/petEdit";
import PetAdd from "./components/petAdd";

import AdminSpecies from "./admin/species";
import AdminPremium from "./admin/premium";

import { authUser } from "./_actions/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const App = ({ auth, authUser }) => {
  const { isLogin, data, loading } = auth;

  useEffect(() => {
    authUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading)
    return (
      <>
        <img src="/loading.gif" />
      </>
    );

  const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isLogin === true && data.level === "User" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );

  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isLogin === true && data.level === "Admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );

  const PetProfileLink = () => {
    return (
      <Container fluid>
        <Row className="bg-app">
          <Profile />
          <PetProfile />
          <Profile2 />
        </Row>
      </Container>
    );
  };

  const PetEditLink = () => {
    return (
      <Container fluid>
        <Row className="bg-app">
          <Profile />
          <PetEdit />
          <Profile2 />
        </Row>
      </Container>
    );
  };

  const PetAddLink = () => {
    return (
      <Container fluid>
        <Row className="bg-app">
          <Profile />
          <PetAdd />
          <Profile2 />
        </Row>
      </Container>
    );
  };

  const IndexLink = () => {
    return (
      <Container fluid>
        <Row className="bg-app">
          <Index />
        </Row>
      </Container>
    );
  };

  return (
    <Router>
      <Switch>
        <UserRoute path="/PetProfile" component={PetProfileLink} />
        <UserRoute path="/PetEdit" component={PetEditLink} />
        <UserRoute path="/PetAdd" component={PetAddLink} />
        <AdminRoute path="/AdminSpecies" component={AdminSpecies} />
        <AdminRoute path="/AdminPremium" component={AdminPremium} />
        <Route path="/Landing">
          <Landing />
        </Route>
        <UserRoute path="/" component={IndexLink} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
