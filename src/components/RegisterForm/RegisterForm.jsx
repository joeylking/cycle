import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipCode, setZipCode] = useState();
  const [profilePic, setProfilePic] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    let formField = new FormData();
    formField.append('username', username);
    formField.append('password', password);
    formField.append('email', email);
    formField.append('first_name', firstName);
    formField.append('last_name', lastName);
    formField.append('street', street);
    formField.append('city', city);
    formField.append('state', state);
    formField.append('zip_code', zipCode);
    formField.append('profile_pic', profilePic);
    registerUser(formField);
  };

  const registerUser = async user => {
    await axios.post('http://127.0.0.1:8000/api/auth/register/', user);
    login();
  };

  const login = async () => {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
      username,
      password,
    });
    const token = response.data.access;
    localStorage.setItem('token', token);
    window.location = '/';
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label> Username: </Form.Label>
        <Form.Control
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></Form.Control>
        <Form.Label> Password: </Form.Label>
        <Form.Control
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></Form.Control>
        <Form.Label> Email: </Form.Label>
        <Form.Control
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Label> First Name: </Form.Label>
        <Form.Control
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        ></Form.Control>
        <Form.Label> Last Name: </Form.Label>
        <Form.Control
          name='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        ></Form.Control>
        <Form.Label> Street and number: </Form.Label>
        <Form.Control
          name='street'
          value={street}
          onChange={e => setStreet(e.target.value)}
        ></Form.Control>
        <Form.Label> City: </Form.Label>
        <Form.Control
          name='city'
          value={city}
          onChange={e => setCity(e.target.value)}
        ></Form.Control>
        <Form.Label> State: </Form.Label>
        <Form.Control
          name='state'
          value={state}
          onChange={e => setState(e.target.value)}
        ></Form.Control>
        <Form.Label> ZIP: </Form.Label>
        <Form.Control
          name='zipCode'
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        ></Form.Control>
        <Form.Label> Profile Pic: </Form.Label>
        <Form.Control
          name='profile_pic'
          type='file'
          onChange={e => setProfilePic(e.target.files[0])}
        ></Form.Control>
        <Button type='submit' className='mt-3'>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
