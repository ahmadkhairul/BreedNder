import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Tabs, Tab, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Deck from "../components/deck/deck";
import Message from "../components/modalMessage";
import Destroy from "../components/modalDelete";

import { getUser } from "../_actions/user";
import { getPet } from "../_actions/pet";

const App = ({ pet, user, getPet, getUser }) => {
  const { data, loading, error } = user;
  const { data: dataPet, loading: loadPet, error: errorPet } = pet;
  const [show, setShow] = useState(true);
  const [petValue, setPetValue] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  if (loading && loadPet)
    return (
      <>
        <img src="/loading.gif" alt="" />
      </>
    );

  if (error && errorPet) return <h1>Something wrong happen</h1>;
  return (
    <>
      <Col>
        <Card border="secondary">
          <Card.Header>
            <Link to="/PetProfile">
              <img src="/7.jpg" className="avatar" alt="" />
            </Link>
            <span>
              <select
                name="petValue"
                value={petValue}
                onChange={event => {
                  setPetValue(event.target.value);
                  getPet(petValue);
                }}
              >
                {data?.pet?.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </span>
          </Card.Header>
          <Card.Body>
            <Tabs>
              <Tab eventKey="match" title="Match">
                <hr />
                {dataPet.map(data => {
                  return (
                    <div key={data.id} className="boxes">
                      <Message
                        name={data.pet_liked.user.breeder}
                        container={
                          <>
                            <img src={"/" + data.pet_liked.photo} alt="" />
                            <div className="text">{data.pet_liked.name}</div>
                          </>
                        }
                      />
                    </div>
                  );
                })}
              </Tab>
              <Tab eventKey="message" title="Message">
                <hr />
                {data?.message?.map((chat, index) => {
                  return (
                    <div className="messenger" key={index}>
                      <Row>
                        <Col md="3">
                          <img src="/profile.png" alt="" />
                        </Col>
                        <Col md="8">
                          <h4>{chat.from.breeder}</h4>
                          {chat.message}
                        </Col>
                        <Col md="1">
                          <Message
                            name={chat.from.breeder}
                            container={<i className="fa fa-reply fa-1x"></i>}
                          />
                          <Destroy name={chat.from.breeder} />
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  );
                })}
              </Tab>
            </Tabs>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </Col>
      <Col md="8">
        <div className="swipe" id="swipe">
          <Deck />
        </div>
        <div className="nav-margin">
          <span className="up">
            <button>
              <img src="./refresh.png" alt="" />
            </button>
            <button>
              <img src="./nope.png" alt="" />
            </button>
            <button>
              <img src="./luv.png" alt="" />
            </button>
            <button>
              <img src="./lightning.png" alt="" />
            </button>
          </span>
          <span className="down">
            <div
              style={{
                display: show === false ? "block" : "none"
              }}
            >
              <button onClick={() => setShow(true)}>S h o w</button>
            </div>

            <div
              style={{
                display: show === true ? "block" : "none"
              }}
            >
              <button onClick={() => setShow(false)}>H i d e</button>
              <img src="/left.png" alt="up" />
              <b>No</b>
              <img src="/right.png" alt="up" />
              <b>Yes</b>
              <img src="/up.png" alt="up" />
              <b>Open</b>
              <img src="/down.png" alt="up" />
              <b>Close</b>
              <img src="/next.png" alt="up" />
              <b>Next Photo </b>
            </div>
          </span>
        </div>
      </Col>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    pet: state.pet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    getPet: id => dispatch(getPet(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
