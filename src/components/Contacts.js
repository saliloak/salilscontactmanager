import React, { Component } from 'react';
import Contact from './Contact';
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'jkarew@gmail.com',
        phone: '555-556-5555'
      },
      {
        id: 3,
        name: 'Henry Johsncon',
        email: 'henryj@gmail.com',
        phone: '555-577-5555'
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
