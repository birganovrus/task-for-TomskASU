import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class ReduxTest extends React.Component {
  componentDidMount() {
    this.props.dispatch((dispatch) => {
      dispatch({ type: "PERSONS_LOADING" });
      axios
        .get("http://localhost:4000/persons")
        .then((response) => {
          dispatch({ type: "PERSONS_LOADED", payload: response.data });
        })
        .catch((err) => {
          dispatch({ type: "PERSONS_NOTLOADED", payload: err });
        });
    });
  }
  render() {
    return <h1>{this.props.data.map(Display)}</h1>;
  }
}

const Display = (user) => {
  return (
    <h1>
      {user.name} {user.status}
    </h1>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(ReduxTest);
