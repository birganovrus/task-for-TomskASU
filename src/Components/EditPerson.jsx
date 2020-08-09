import React from "react";
import { connect } from "react-redux";
import { editPerson } from "../Actions And Types/persons.actions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class EditPersonForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
    };
  }

  componentDidMount() {
    const props = this.props;

    if (props.location && props.location.state) {
      const person = this.props.location.state.person;
      this.setState({
        id: person.id,
        firstName: person.firstName,
        lastName: person.lastName,
      });
    }
  }

  handleSumbit(event) {
    event.preventDefault();
    this.props.onEdit(this.state);
  }

  handleFirstNameValue(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastNameValue(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSumbit.bind(this)}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Измените имя пользователя"
            value={this.state.firstName}
            onChange={this.handleFirstNameValue.bind(this)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            type="text"
            placeholder="Измените фамилию пользователя"
            value={this.state.lastName}
            onChange={this.handleLastNameValue.bind(this)}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Принять изменения
        </Button>{" "}
        <Link to="/">
          <Button variant="outline-primary">Назад</Button>
        </Link>
      </Form>
    );
  }
}

const MapStateToProps = (state) => {
  return {};
};
const MapDispatchToProps = (dispatch) => {
  return {
    onEdit: (person) => {
      dispatch(editPerson(person));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(EditPersonForm);
