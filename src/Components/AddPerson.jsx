import React from 'react'
import { connect } from 'react-redux'
import { createPerson } from '../Actions And Types/persons.actions'

import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { history } from '../index.js'

class AddPersonForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: 0,
      firstName: '',
      lastName: ''
    }
  }

  handleSumbit (event) {
    event.preventDefault()
    this.props.onAdd(this.state)
  }

  handleGoBack () {
    history.push('/')
    history.go()
  }

  handleFirstNameValue (event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameValue (event) {
    this.setState({
      lastName: event.target.value
    })
  }

  render () {
    if (this.props.errorObject) {
      return (
        <>
          <Alert variant='danger'>
            Произошла ошибка с кодом: {this.props.errorObject.status}
            <br />
            Описание ошибки: {this.props.errorObject.message}
          </Alert>
          <Button
            variant='outline-primary'
            onClick={this.handleGoBack.bind(this)}
          >
            Назад
          </Button>
        </>
      )
    } else {
      return (
        <Form onSubmit={this.handleSumbit.bind(this)}>
          <Form.Group controlId='formBasicFirstName'>
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type='text'
              required
              placeholder='Введите имя пользователя'
              onChange={this.handleFirstNameValue.bind(this)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicLastName'>
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type='text'
              required
              placeholder='Введите фамилию пользователя'
              onChange={this.handleLastNameValue.bind(this)}
            />
          </Form.Group>
          <Button variant='outline-success' type='submit'>
            Создать
          </Button>
          <Link to='/'>
            <Button variant='outline-primary'>Назад</Button>
          </Link>
        </Form>
      )
    }
  }
}

const MapStateToProps = (state) => {
  return {
    errorObject: state.personsData.errorObject || null
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    onAdd: (person) => {
      dispatch(createPerson(person))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(AddPersonForm)
