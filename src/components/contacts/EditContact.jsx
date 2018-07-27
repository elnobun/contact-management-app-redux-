import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInputField from '../common/TextInputField';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  // Populate the edit form with a particular id data.

  onHandleChange = e => {
    // Clear the error field as user types.
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onHandleSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Simple Form validation
    if (name === '') {
      this.setState({
        errors: { name: 'Name field is required' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { email: 'Email ield is required' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' }
      });
      return;
    }

    // Update the new information

    // Clear the state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };
  render() {
    const { name, email, phone, errors } = this.state;
    const isEnabled = name.length > 0 && email.length > 0 && phone.length > 0;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <h1>Edit Contact</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <TextInputField
              label="Name:"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onHandleChange}
              error={errors.name}
            />
            <TextInputField
              label="Email:"
              type="email"
              name="email"
              placeholder="Enter email..."
              value={email}
              onChange={this.onHandleChange}
              error={errors.email}
            />
            <TextInputField
              label="Phone:"
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onHandleChange}
              error={errors.phone}
            />
            <button
              disabled={!isEnabled}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Save Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default EditContact;
