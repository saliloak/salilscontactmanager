import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  // onShowClick = (name, e) => {
  //   console.log(name);
  // };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {/* <h4>
          {name} <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down" />
        </h4> */}
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone Number: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
