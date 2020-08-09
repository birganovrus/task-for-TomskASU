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
} from "../Actions And Types/types";

const initialState = {
  persons: [],
  errorObject: null,
  isLoading: false,
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_SUCCESS:
      return { ...state, persons: [...state.persons, action.payload] };
    case ADD_PERSON_ERROR:
      return { ...state, errorObject: action.payload };
    case DELETE_PERSON_SUCCESS:
      const filteredPersons = state.persons.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, persons: filteredPersons };
    case DELETE_PERSON_ERROR:
      return { ...state, errorObject: action.payload };
    case EDIT_PERSON_SUCCESS:
      const updatedPersons = state.persons.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, persons: [...updatedPersons, action.payload] };
    case FETCH_PERSONS_SUCCESS:
      return { ...state, persons: action.payload };
    case FETCH_PERSONS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_PERSONS_ERROR:
      return { ...state, errorObject: action.payload };
    default:
      return state;
  }
};

export default personsReducer;
