import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ChangePasswordForm = ({ user, closeModal }) => {
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [oldPassword, setOldPassword] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    changePassword();
    closeModal();
  };

  const changePassword = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'PUT',
      url: `http://127.0.0.1:8000/api/auth/change_password/${user.id}/`,
      data: {
        password: password,
        password2: password2,
        oldPassword: oldPassword,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor=''>Current Password</Form.Label>
        <Form.Control
          type='password'
          name='oldPassword'
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>New Password</Form.Label>
        <Form.Control
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>New Password Again</Form.Label>
        <Form.Control
          type='password'
          name='password2'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default ChangePasswordForm;
