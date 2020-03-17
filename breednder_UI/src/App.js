import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import Landing from "./app/landing";
import Index from "./app/index";

import Profile, { Profile2 } from "./app/profile";
import PetProfile from "./components/petProfile";
import PetEdit from "./components/petEdit";
import PetAdd from "./components/petAdd";

import AdminSpecies from "./admin/species";
import AdminPremium from "./admin/premium";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-link">
          <Switch>
            <Route path="/PetProfile">
              <Container fluid>
                <Row className="bg-app">
                  <Profile />
                  <PetProfile />
                  <Profile2 />
                </Row>
              </Container>
            </Route>

            <Route path="/PetEdit">
              <Container fluid>
                <Row className="bg-app">
                  <Profile />
                  <PetEdit />
                  <Profile2 />
                </Row>
              </Container>
            </Route>

            <Route path="/PetAdd">
              <Container fluid>
                <Row className="bg-app">
                  <Profile />
                  <PetAdd />
                  <Profile2 />
                </Row>
              </Container>
            </Route>

            <Route path="/Landing">
              <Landing />
            </Route>

            <Route path="/AdminSpecies">
              <AdminSpecies />
            </Route>

            <Route path="/AdminPremium">
              <AdminPremium />
            </Route>

            <Route path="/PetAdd">
              <Container fluid>
                <Row className="bg-app">
                  <Profile />
                  <PetAdd />
                  <Profile2 />
                </Row>
              </Container>
            </Route>

            <Route path="/">
              <Container fluid>
                <Row className="bg-app">
                  <Index />
                </Row>
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
