import {
  FETCH_PERSONS_LOADING,
  FETCH_PERSONS_ERROR,
  FETCH_PERSONS_SUCCESS,
  DELETE_PERSON_LOADING,
  DELETE_PERSON_ERROR,
  DELETE_PERSON_SUCCESS,
  EDIT_PERSON_LOADING,
  EDIT_PERSON_ERROR,
  EDIT_PERSON_SUCCESS,
  ADD_PERSON_LOADING,
  ADD_PERSON_ERROR,
  ADD_PERSON_SUCCESS,
} from "./types";

import { persons } from "./personsExample";
import { notify } from "react-notify-toast";
import { history } from "../index.js";
import Axios from "axios";

export const fetchPersonsSuccess = (data) => {
  return {
    type: FETCH_PERSONS_SUCCESS,
    payload: data,
  };
};

export const fetchPersonsLoading = (data) => {
  return {
    type: FETCH_PERSONS_LOADING,
    payload: data,
  };
};

export const fetchPersonsError = (data) => {
  return {
    type: FETCH_PERSONS_ERROR,
    payload: data,
  };
};

export const createPersonSuccess = (data) => {
  return {
    type: ADD_PERSON_SUCCESS,
    payload: data,
  };
};

export const createPersonError = (data) => {
  return {
    type: ADD_PERSON_ERROR,
    payload: data,
  };
};

export const editPersonSuccess = (data) => {
  return {
    type: EDIT_PERSON_SUCCESS,
    payload: data,
  };
};

export const deletePersonSuccess = (id) => {
  return {
    type: DELETE_PERSON_SUCCESS,
    payload: { id: id },
  };
};

export const deletePersonError = (data) => {
  return {
    type: DELETE_PERSON_ERROR,
    payload: data,
  };
};

//ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
export const fetchPersons = () => {
  let isLoading = true;

  return (dispatch) => {
    dispatch(fetchPersonsLoading(isLoading));
    return Axios.get("http://localhost:4000/persons/")
      .then((response) => {
        isLoading = false;
        dispatch(fetchPersonsSuccess(response.data));
        dispatch(fetchPersonsLoading(isLoading));
      })
      .catch((error) => {
        const errorObject = {};
        errorObject["message"] = error.response.statusText;
        errorObject["status"] = error.response.status;
        dispatch(fetchPersonsError(errorObject));
        isLoading = false;
        dispatch(fetchPersonsLoading(isLoading));
      });
  };
};
//

//СОЗДАНИЕ ПОЛЬЗОВАТЕЛЕЙ

export const createPerson = (person) => {
  const data = {
    firstName: person.firstName,
    lastName: person.lastName,
  };
  return (dispatch) => {
    Axios.post("http://localhost:4000/persons/", data)
      .then((response) => {
        const id = response.data.id;
        Axios.get("http://localhost:4000/persons/" + id)
          .then((response) => {
            dispatch(createPersonSuccess(response.data));
            notify.show("Пользователь создан!", "success", 3000);
            history.push("/");
            history.go();
          })
          .catch((error) => {
            const errorObject = {};
            errorObject["message"] = error.response.statusText;
            errorObject["status"] = error.response.status;
            dispatch(createPersonError(errorObject));
          });
      })
      .catch((error) => {
        const errorObject = {};
        errorObject["message"] = error.response.statusText;
        errorObject["status"] = error.response.status;
        dispatch(createPersonError(errorObject));
      });
  };
};
//

//УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
export const deletePerson = (id) => {
  return (dispatch) => {
    return Axios.delete("http://localhost:4000/persons/" + id)
      .then(() => {
        dispatch(deletePersonSuccess(id));
      })
      .catch((error) => {
        const errorObject = {};
        errorObject["message"] = error.response.statusText;
        errorObject["status"] = error.response.status;
        dispatch(deletePersonError(errorObject));
      });
  };
};
//

//РЕДАКТИРОВАНИЕ ПОЛЬЗОВАТЕЛЕЙ
export const editPerson = (person) => {
  const id = person.id;
  console.log(id);
  return (dispatch) => {
    Axios.put("http://localhost:4000/persons/" + id, person)
      .then((response) => {
        Axios.get("http://localhost:4000/persons/" + id)
          .then((response) => {
            dispatch(editPersonSuccess(response.data));
            notify.show("Пользователь изменен!", "success", 3000);
            history.push("/");
            //history.go();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {});
  };
};
//
