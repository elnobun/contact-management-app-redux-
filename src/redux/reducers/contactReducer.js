import { GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACTS } from '../actions/types';

const initialState = {
  contacts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get contacts from original state
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    // add contacts through spread operator
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    // delete contacts through filter
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
