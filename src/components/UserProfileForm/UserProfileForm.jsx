import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UserProfileForm = ({ user, submit }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [street, setStreet] = useState(user.street);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zipCode, setZipCode] = useState(user.zip_code);
  const [profilePic, setProfilePic] = useState(user.profile_pic);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(profilePic);
    let formField = new FormData();
    formField.append('username', username);
    formField.append('email', email);
    formField.append('first_name', firstName);
    formField.append('last_name', lastName);
    formField.append('street', street);
    formField.append('city', city);
    formField.append('state', state);
    formField.append('zip_code', zipCode);
    formField.append('profile_pic', profilePic);
    submit(formField);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label> First Name: </Form.Label>
        <Form.Control
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label> Last Name: </Form.Label>
        <Form.Control
          name='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Street</Form.Label>
        <Form.Control
          type='text'
          name='street'
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type='text'
          name='city'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type='text'
          name='state'
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type='text'
          name='zipCode'
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Profile Pic</Form.Label>
        <Form.Control
          type='file'
          name='profilePic'
          onChange={e => setProfilePic(e.target.files[0])}
        />
      </Form.Group>
      <Button type='submit' className='mt-2'>
        Submit
      </Button>
    </Form>
  );
};

export default UserProfileForm;
