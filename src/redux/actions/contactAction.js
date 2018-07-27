import { GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACTS } from './types';
import axios from 'axios';

// Action: get contacts
export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

// Action: add contacts by {contact}
export const addContact = contact => ({
  type: ADD_CONTACTS,
  payload: contact
});

// Action: delete contacts by {id}
export const deleteContact = id => ({
  type: DELETE_CONTACTS,
  payload: id
});
