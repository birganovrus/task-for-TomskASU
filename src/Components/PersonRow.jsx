import React from "react";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

const PersonRow = (props) => {
  return (
    <tr key={props.id}>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>
        <div className="table-buttons">
          <ButtonEdit user={props.user} /> <ButtonDelete user={props.user} />
        </div>
      </td>
    </tr>
  );
};

/*<Button variant="outline-danger">
<FontAwesomeIcon icon={faUserTimes} />
</Button>*/
export default PersonRow;
