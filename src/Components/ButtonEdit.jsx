import React from "react";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import ModalEdit from "./ModalEdit";

const ButtonEdit = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>
        <FontAwesomeIcon icon={faUserEdit} />
      </Button>

      <ModalEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        name={props.user.firstName}
        lastname={props.user.lastName}
      />
    </>
  );
};

export default ButtonEdit;
