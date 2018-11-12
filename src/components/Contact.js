import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {};
  // onShowClick = () => {
  //   console.log('Hello');
  // };
  onShowClick = (name, e) => {
    console.log(name);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        {/* <h4>
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4> */}
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick.bind(this, name)}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone Number: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
