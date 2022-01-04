import { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

// {
//     "username": "brett",
//     "password": "somePass@12",
//     "email": "brett@devcodecamp.com",
//     "first_name": "Brett",
//     "last_name": "Johnson",
//     "street": "123 Brett Ave",
//     "city": "Milwaukee",
//     "state": "Wisconsin",
//     "zip_code": "53201",
//     "profile_pic": null,
//     "rating": null
// }

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      street: '',
      city: '',
      state: '',
      zip_code: '',
      profile_pic: null,
      rating: null,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser(this.state);
  };

  registerUser = async user => {
    await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label> Username: </Form.Label>
          <Form.Control
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> Password: </Form.Label>
          <Form.Control
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> Email: </Form.Label>
          <Form.Control
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> First Name: </Form.Label>
          <Form.Control
            name='first_name'
            value={this.state.first_name}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> Last Name: </Form.Label>
          <Form.Control
            name='last_name'
            value={this.state.last_name}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> Street and number: </Form.Label>
          <Form.Control
            name='street'
            value={this.state.street}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> City: </Form.Label>
          <Form.Control
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> State: </Form.Label>
          <Form.Control
            name='state'
            value={this.state.state}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> ZIP: </Form.Label>
          <Form.Control
            name='zip_code'
            value={this.state.zip_code}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Label> Profile Pic: </Form.Label>
          <Form.Control
            name='profile_pic'
            type='file'
            value={this.state.profile_pic}
            onChange={this.handleChange}
          ></Form.Control>
          <Button type='submit' className='mt-3'>
            Register
          </Button>
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;
