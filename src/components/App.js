import './App.css';
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import GiftList from './GiftList/GiftList';

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <LoginForm setUser={setUser} />;
  }

  return (
    <div className='App'>
      <h2>Hi, {user.first_name}</h2>
      <GiftList />
    </div>
  );
}

export default App;
