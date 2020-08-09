import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const ModalDelete = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
            deleteUser(props.id);
            props.onHide();
          }}
        >
          Да, удалить!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(ModalDelete);
