import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = ({ getUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
      username,
      password,
    });
    const token = response.data.access;
    localStorage.setItem('token', token);
    getUser(token);
    return token;
  };

  //   const getUser = async () => {
  //     const token = localStorage.getItem('token');
  //     const response = await axios({
  //       method: 'GET',
  //       url: 'http://127.0.0.1:8000/api/auth/user/',
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setUser(response.data);
  //     console.log(response.data);
  //     return response.data;
  //   };

  return (
    // <Grid>
    //   <Paper elevation={3} style={paperStyle}>
    //     <Grid align='center'>
    //       <h2>Please sign in:</h2>
    //     </Grid>
    //     <TextField
    //       label='Username'
    //       placeholder='Your username'
    //       value={username}
    //       onChange={e => setUsername(e.target.value)}
    //       fullWidth
    //       margin='normal'
    //       required
    //     />
    //     <TextField
    //       label='Password'
    //       placeholder='Your password'
    //       value={password}
    //       onChange={e => setPassword(e.target.value)}
    //       type='password'
    //       fullWidth
    //       margin='normal'
    //       required
    //     />
    //     <Button onClick={handleSubmit}>Sign In</Button>
    //   </Paper>
    // </Grid>
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
        <Button type='submit' className='mt-3'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
