import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import PersonRow from "./Components/PersonRow";

import Table from "react-bootstrap/Table";
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
    return <PersonRow user={user} id={id} />;
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
