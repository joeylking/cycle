import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import GiftList from './GiftList/GiftList';
import GiftDetail from './GiftDetail/GiftDetail';
import Give from './Give/Give';
import InterestedList from './InterestedList/InterestedList';
import UserProfile from './UserProfile/UserProfile';
import History from './History/History';

function App() {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    getUser(token);
  }, []);

  const isAuthenticated = () => (localStorage.getItem('token') ? true : false);

  const logout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  const getUser = async token => {
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/auth/user/',
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(response.data);
    console.log(response.data);
    return response.data;
  };

  return (
    <div className='App'>
      <NavBar bg='light' expand='lg' user={user} logout={logout} />
      <Routes>
        <Route path='/' exact element={<GiftList />} />
        <Route path='/Login' element={<LoginForm />} />
        <Route path='/Register' element={<RegisterForm />} />
        <Route path='/Give' element={<Give />} />
        <Route path='/Detail' element={<GiftDetail />} />
        <Route path='/Interested' element={<InterestedList />} />
        <Route path='/Profile' element={<UserProfile />} />
        <Route path='/History' element={<History />} />
      </Routes>
    </div>
  );
}
export default App;
