import React, { Component, Fragment } from "react";
import "./style.css";

import Mach from "./match";
import Chat from "./chat";
import Deck from "../components/deck/deck";
import Message from "../components/modalMessage";
import Destroy from "../components/modalDelete";

import { Link } from "react-router-dom";
import { Row, Tabs, Tab, Card, Col } from "react-bootstrap";

import "font-awesome/css/font-awesome.min.css";

class Index extends Component {
  state = { showing: true };
  render() {
    const { showing } = this.state;
    //const token = localStorage.getItem("token");
    return (
      <Fragment>
        <Col>
          <Card border="secondary">
            <Card.Header>
              <Link to="/PetProfile">
                <img src="/7.jpg" className="avatar" alt="" />
              </Link>
              <span>
                &nbsp;Sibleck
                <img src="/downwhite.png" className="sm" alt="" />
              </span>
            </Card.Header>
            <Card.Body>
              <Tabs>
                <Tab eventKey="match" title="Match">
                  <hr />
                  {Mach.map((data, index) => {
                    return (
                      <div key={index} className="boxes">
                        <Message
                          name={data.breeder}
                          container={
                            <>
                              <img src={data.pics} alt="" />
                              <div className="text">{data.name}</div>
                            </>
                          }
                        />
                      </div>
                    );
                  })}
                </Tab>
                <Tab eventKey="message" title="Message">
                  <hr />
                  {Chat.map((chat, index) => {
                    return (
                      <div className="messenger" key={chat.index}>
                        <Row>
                          <Col md="3">
                            <img src={chat.pics} alt="" />
                          </Col>
                          <Col md="8">
                            <h4>{chat.name}</h4>
                            {chat.message}
                          </Col>
                          <Col md="1">
                            <Message
                              name={chat.name}
                              container={<i className="fa fa-reply fa-1x"></i>}
                            />
                            <Destroy name={chat.name} />
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
                  display: showing ? "none" : "block"
                }}
              >
                <button onClick={() => this.setState({ showing: !showing })}>
                  S h o w
                </button>
              </div>

              <div
                style={{
                  display: showing ? "block" : "none"
                }}
              >
                <button onClick={() => this.setState({ showing: !showing })}>
                  H i d e
                </button>
                <img src="/left.png" alt="up" />
                <b>No</b>
                <img src="/right.png" alt="up" />
                <b>Yes</b>
                <img src="/up.png" alt="up" />
                <b>Open</b>
                <img src="/down.png" alt="up" />
                <b>Close</b>
                <img src="/next.png" alt="up" />
                <b>Next Photo</b>
              </div>
            </span>
          </div>
        </Col>
      </Fragment>
    );
  }
}

export default Index;
