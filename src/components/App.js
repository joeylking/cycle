import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm/LoginForm';
import GiftList from './GiftList/GiftList';
import { Button } from '@mui/material';

function App() {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  const isAuthenticated = () => (localStorage.getItem('token') ? true : false);

  const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/auth/user/',
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data);
    console.log(response.data);
    return response.data;
  };

  if (!authenticated) {
    return <LoginForm getUser={getUser} />;
  }

  if (!user) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='App'>
        <h2>Hi, {user.first_name}</h2>
        <Button>Logout</Button>
        <img
          src={`http://127.0.0.1:8000${user.profile_pic}`}
          alt='profile pic'
        />
        <GiftList />
      </div>
    );
  }
}

export default App;
