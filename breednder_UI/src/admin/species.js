import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSpecies, saveSpecies, deleteSpecies } from "../_actions/species";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../admin/header";

const App = ({ species, getSpecies, saveSpecies, deleteSpecies }) => {
  const [value, setValue] = useState("");
  const { data, loading, error } = species;

  useEffect(() => {
    getSpecies();
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

  return (
    <div>
      <Header />
      <form
        onSubmit={event => {
          event.preventDefault();
          saveSpecies(value);
          setValue("");
        }}
      >
        <input
          type="text"
          placeholder="Add New Species"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <input type="submit" value="Add Species" />
      </form>
      <Table className="text-center">
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
                <button
                  onClick={() => {
                    deleteSpecies(item.id);
                  }}
                >
                  <i className="fa fa-close fa-1x"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
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
