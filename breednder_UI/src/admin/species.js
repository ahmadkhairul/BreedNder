import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Table } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";

import { getSpecies, saveSpecies, deleteSpecies } from "../_actions/species";
import Header from "../admin/header";

const App = ({ species, getSpecies, saveSpecies, deleteSpecies }) => {
  const [value, setValue] = useState("");
  const { data, loading, error } = species;

  useEffect(() => {
    getSpecies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return <h2>Authorization Not Allowed</h2>;

  if (loading)
    return (
      <>
        <img src="/loading.gif" />
      </>
    );

  return (
    <Container fluid className="adminSpecies">
      <Header />
      <Form
        onSubmit={event => {
          event.preventDefault();
          saveSpecies(value);
          setValue("");
        }}
      >
        <Form.Group>
          <Form.Control
            type="text"
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
          />
        </Form.Group>
        <button className="addSpecies" type="submit">
          Add Species
        </button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Species Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <button className="delSpecies">
                  <i
                    className="fa fa-close fa-1x"
                    onClick={() => {
                      deleteSpecies(item.id);
                    }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    species: state.species
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSpecies: () => dispatch(getSpecies()),
    saveSpecies: name => dispatch(saveSpecies(name)),
    deleteSpecies: id => dispatch(deleteSpecies(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
