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
export const addContact = contact => async dispatch => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/users`,
    contact
  );
  dispatch({
    type: ADD_CONTACTS,
    payload: res.data
  });
};

// Action: delete contacts by {id}
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACTS,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACTS,
      payload: id
    });
  }
};
