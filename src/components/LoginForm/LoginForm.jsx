import { useState } from 'react';
import axios from 'axios';
import { Grid, Paper, TextField, Button } from '@mui/material';

const LoginForm = ({ setToken, setUser }) => {
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
    getUser();
    return token;
  };

  const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/auth/user/',
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data);
    return response.data;
  };

  const paperStyle = {
    padding: 20,
    heigh: '70vh',
    width: 280,
    margin: '20px auto',
  };
  return (
    <Grid>
      <Paper elevation={3} style={paperStyle}>
        <Grid align='center'>
          <h2>Please sign in:</h2>
        </Grid>
        <TextField
          label='Username'
          placeholder='Your username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Password'
          placeholder='Your password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          fullWidth
          margin='normal'
          required
        />
        <Button onClick={handleSubmit}>Sign In</Button>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
