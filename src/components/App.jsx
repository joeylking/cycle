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
import WinnersList from './WinnersList/WinnersList';
import LandingPage from './LandingPage/LandingPage';
import Loading from './Loading/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      authenticated: false,
      giftID: '',
      filteredGifts: [],
      currentQuery: '',
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
    window.location = '/';
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
    return response.data;
  };

  addGift = async gift => {
    const token = localStorage.getItem('token');
    console.log(gift);
    const response = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/gifts/',
      data: gift,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    this.getGifts();
  };

  editInterested = async gift => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/gifts/${gift.id}/`,
      data: { interested_users: gift.interested_users },
      headers: { Authorization: `Bearer ${token}` },
    });
    this.getGifts();
  };

  setGift = gift => {
    this.setState({
      gift: gift,
    });
  };

  deleteGift = async gift => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/gifts/${gift.id}/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    this.getGifts();
  };

  filterGifts = query => {
    const filtered = this.state.gifts.filter(gift => {
      if (!query || query === '') {
        return gift;
      } else if (
        gift.name.toLowerCase().includes(query.toLowerCase()) ||
        gift.description.toLowerCase().includes(query.toLowerCase()) ||
        gift.category.toLowerCase().includes(query.toLowerCase())
      ) {
        return gift;
      }
    });
    this.setState({
      filteredGifts: filtered,
      currentQuery: query,
    });
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
              this.state.user ? (
                this.state.gifts ? (
                  <GiftList
                    user={this.state.user}
                    gifts={this.state.filteredGifts}
                    editInterested={this.editInterested}
                    setGift={this.setGift}
                    filterGifts={this.filterGifts}
                  />
                ) : (
                  <Loading />
                )
              ) : (
                <LandingPage />
              )
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
                setGift={this.setGift}
                editGift={this.editGift}
                deleteGift={this.deleteGift}
              />
            }
          />
          <Route
            path='/Detail'
            element={
              <GiftDetail
                gift={this.state.gift}
                user={this.state.user}
                editInterested={this.editInterested}
              />
            }
          />
          <Route
            path='/Interested'
            element={
              <InterestedList gifts={this.state.gifts} user={this.state.user} />
            }
          />
          <Route
            path='/Winners'
            element={<WinnersList gifts={this.state.gifts} />}
          />
          <Route
            path='/Profile'
            element={
              <UserProfile user={this.state.user} getUser={this.getUser} />
            }
          />
          <Route
            path='/History'
            element={
              <History user={this.state.user} gifts={this.state.gifts} />
            }
          />
        </Routes>
      </div>
    );
  }
}
export default App;
