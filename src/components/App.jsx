import { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [],
      user: '',
      authenticated: false,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    try {
      this.getUser(token);
      this.getGifts();
    } catch {
      console.log('Something went wrong');
    }
  }

  isAuthenticated = () => (localStorage.getItem('token') ? true : false);

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      authenticated: false,
      user: '',
    });
  };

  getGifts = async () => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/gifts/',
      headers: { Authorization: `Bearer ${token}` },
    });
    this.setState({
      gifts: response.data,
    });
    return response;
  };

  getUser = async token => {
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/auth/user/',
      headers: { Authorization: `Bearer ${token}` },
    });
    this.setState({
      user: response.data,
    });
    console.log(response.data);
    return response.data;
  };

  addGift = async gift => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/gifts/',
      data: gift,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    this.getGifts();
  };

  editGift = async gift => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'PUT',
      url: `http://127.0.0.1:8000/api/gifts/${gift.id}/`,
      data: gift,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    this.getGifts();
  };

  addInterested = async gift => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/gifts/${gift.id}/`,
      data: { interested_users: gift.interested_users },
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    this.getGifts();
  };
  render() {
    return (
      <div className='App'>
        <NavBar
          bg='light'
          expand='lg'
          user={this.state.user}
          logout={this.logout}
        />
        <Routes>
          <Route
            path='/'
            exact
            element={
              <GiftList
                user={this.state.user}
                gifts={this.state.gifts}
                addInterested={this.addInterested}
              />
            }
          />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Register' element={<RegisterForm />} />
          <Route
            path='/Give'
            element={
              <Give
                user={this.state.user}
                gifts={this.state.gifts}
                addGift={this.addGift}
              />
            }
          />
          <Route path='/Detail' element={<GiftDetail />} />
          <Route
            path='/Interested'
            element={<InterestedList gifts={this.state.gifts} />}
          />
          <Route path='/Profile' element={<UserProfile />} />
          <Route path='/History' element={<History />} />
        </Routes>
      </div>
    );
  }
}
export default App;
