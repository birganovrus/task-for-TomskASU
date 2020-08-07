import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

class App extends Component {
  data = [
    { id: "1", firstName: "Test1", lastName: "Testov1" },
    { id: "2", firstName: "Test2", lastName: "Testov2" },
    { id: "3", firstName: "Test3", lastName: "Testov3" },
  ];

  DisplayUsers = (user, id) => {
    return (
      <tr key={id}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container fluid>
            <Row>
              <Col></Col>
              <Col md={8}>
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Surname</th>
                    </tr>
                  </thead>
                  <tbody>{this.data.map(this.DisplayUsers)}</tbody>
                </Table>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
