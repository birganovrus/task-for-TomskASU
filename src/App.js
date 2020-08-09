import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

//Собственные компоненты
import Header from "./Components/Header";
import PersonsTable from "./Components/PersonsTable";
import EditPersonForm from "./Components/EditPerson";
import AddPersonForm from "./Components/AddPerson";
//

import Notifications from "react-notify-toast";

//react-bootstrap компоненты
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//

//Стили
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Container fluid>
            <Row>
              <Col></Col>
              <Col md={8}>
                <Notifications />
                <Switch>
                  <Route path="/" exact>
                    <PersonsTable />
                  </Route>
                  <Route path="/addPerson">
                    <AddPersonForm />
                  </Route>
                  <Route
                    path="/edit"
                    component={(props) => <EditPersonForm {...props} />}
                  ></Route>
                </Switch>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
