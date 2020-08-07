import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";

import Table from "react-bootstrap/Table";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faTimes,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/persons")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isDataLoaded: true,
          data: json,
        });
      });
  }

  DisplayUsers = (user, id) => {
    return (
      <tr key={id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>
          <div className="table-buttons">
            <Button variant="outline-primary">
              <FontAwesomeIcon icon={faUserEdit} />
            </Button>{" "}
            <Button variant="outline-danger">
              <FontAwesomeIcon icon={faUserTimes} />
            </Button>
          </div>
        </td>
      </tr>
    );
  };

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col md={8}>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                  </tr>
                </thead>
                <tbody>{data.map(this.DisplayUsers)}</tbody>
              </Table>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
