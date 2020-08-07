import React from "react";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "./ModalDelete";

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
        name={props.user.firstName}
        lastname={props.user.lastName}
      />
    </>
  );
};

export default ButtonDelete;
