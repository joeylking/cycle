import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
export class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      street: this.props.user.street,
      city: this.props.user.city,
      state: this.props.user.state,
      zip_code: this.props.user.zip_code,
      rating: this.props.user.rating,
    };
  }

  handleChange = event => {
    if ([event.target.name] === 'profile_pic') {
      this.setState({
        image: event.target.files,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor=''>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>First Name</Form.Label>
          <Form.Control
            type='text'
            name='first_name'
            value={this.state.first_name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Last Name</Form.Label>
          <Form.Control
            type='text'
            name='last_name'
            value={this.state.last_name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Street</Form.Label>
          <Form.Control
            type='text'
            name='street'
            value={this.state.street}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>City</Form.Label>
          <Form.Control
            type='text'
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>State</Form.Label>
          <Form.Control
            type='text'
            name='state'
            value={this.state.state}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Zip Code</Form.Label>
          <Form.Control
            type='text'
            name='zip_code'
            value={this.state.zip_code}
            onChange={this.handleChange}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label htmlFor=''>Profile Pic</Form.Label>
          <Form.Control
            type='file'
            name='profile_pic'
            value={this.state.profile_pic}
            onChange={this.handleChange}
            disabled
          />
        </Form.Group> */}
        <Button type='submit' className='mt-2'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default UserProfileForm;
