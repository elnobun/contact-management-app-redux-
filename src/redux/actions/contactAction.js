import { GET_CONTACTS, ADD_CONTACTS, DELETE_CONTACTS } from './types';

// Action: get contacts
export const getContacts = () => ({
  type: GET_CONTACTS
});

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
