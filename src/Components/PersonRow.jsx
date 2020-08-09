import React from "react";
import { connect } from "react-redux";
import { deletePerson } from "../Actions And Types/persons.actions";

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes, faUserEdit } from "@fortawesome/free-solid-svg-icons";

const ButtonDelete = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-danger" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faUserTimes} />
      </Button>

      <ModalDelete
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={props.person.firstName}
        lastname={props.person.lastName}
        id={props.person.id}
        onDelete={props.onDelete}
      />
    </>
  );
};

const ButtonEdit = (props) => {
  return (
    <Link
      to={{
        pathname: "/edit/" + props.person.id,
        state: { person: props.person },
      }}
    >
      <Button variant="outline-primary">
        <FontAwesomeIcon icon={faUserEdit} />
      </Button>
    </Link>
  );
};

const ModalDelete = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Удаление пользователя:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Вы уверены, что хотите удалить пользователя :{" "}
          {props.name + " " + props.lastname}
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Нет, не удалять!
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            props.onHide();
            props.onDelete(props.id);
          }}
        >
          Да, удалить!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

class Person extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <tr>
          <td>
            <h1>Загрузка данных, подождите</h1>
          </td>
        </tr>
      );
    } else if (this.props.errorObject) {
      return (
        <tr>
          <td>
            <Alert variant="danger">
              Произошла ошибка с кодом: {this.props.errorObject.status}
              <br />
              Описание ошибки: {this.props.errorObject.message}
            </Alert>
          </td>
        </tr>
      );
    } else {
      return (
        <>
          {this.props.persons.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>
                  <div className="table-buttons">
                    <ButtonEdit person={person} />{" "}
                    <ButtonDelete
                      person={person}
                      onDelete={this.props.onDelete}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </>
      );
    }
  }
}

const MapStateToProps = (state) => {
  return {
    persons: state.personsData.persons || null,
    isLoading: state.personsData.isLoading,
    errorObject: state.personsData.errorObject || null,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deletePerson(id));
    },
  };
};

/**/

export default connect(MapStateToProps, MapDispatchToProps)(Person);
