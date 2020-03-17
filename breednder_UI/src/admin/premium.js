import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPremium, updatePremium } from "../_actions/premium";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../admin/header";

const App = ({ premium, getPremium, updatePremium }) => {
  const { data, loading, error } = premium;
  const [statusVal, statusSetVal] = useState("");

  useEffect(() => {
    getPremium();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error)
    return (
      <h2>
        Authorization Not Allowed
        <br />
        <Link to="/">GO BACK</Link>
      </h2>
    );

  if (loading)
    return (
      <>
        <img src="/loading.gif" />
      </>
    );

  const status = ["Free", "Premium"];

  return (
    <div>
      <Header />
      <Form
        onSubmit={event => {
          updatePremium({ statusVal });
          event.preventDefault();
        }}
      >
        <Table className="text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Breeder Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Rek Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.user.breeder}</td>
                <td>{item.user.phone}</td>
                <td>{item.user.address}</td>
                <td>{item.no_rek}</td>
                <td>
                  <img src={item.proof_of_transfer} />
                </td>
                <td>
                  <Form.Group>
                    <Form.Control as="select">
                      {status.map((data, index) => {
                        return (
                          <>
                            {item.status === data ? (
                              <option key={index} value={data} selected>
                                {data}
                              </option>
                            ) : (
                              <option key={index} value={data}>
                                {data}
                              </option>
                            )}
                          </>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </td>
                <td>
                  <button type="submit">
                    <i className="fa fa-edit fa-1x"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    premium: state.premium
  };
}

function mapDispatchToProps(dispatch) {
  return { getPremium: () => dispatch(getPremium()) };
  return { updatePremium: value => dispatch(updatePremium(value)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
