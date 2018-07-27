import { GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACTS } from '../actions/types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'James Doe',
      email: 'james@gmail.com',
      phone: 111 - 111 - 111
    },
    {
      id: 2,
      name: 'Willaim Harts',
      email: 'willy@gmail.com',
      phone: 222 - 222 - 222
    },
    {
      id: 3,
      name: 'Harry Johnson',
      email: 'harry@gmail.com',
      phone: 333 - 333 - 333
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get contacts from original state
    case GET_CONTACTS:
      return {
        ...state
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
