import React, { Component, Fragment } from 'react';
import Contact from '../contacts/Contact';

class Contacts extends Component {
  state = {
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
  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        <h1 className="display-5 mb-2">
          <span className="text-info">Contacts</span>
        </h1>
        {contacts.length === 0
          ? 'No Contacts'
          : contacts.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
      </Fragment>
    );
  }
}

export default Contacts;
