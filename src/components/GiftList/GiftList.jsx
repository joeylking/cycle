import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const GiftList = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    async function getGifts() {
      const token = localStorage.getItem('token');
      const response = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/gifts/',
        headers: { Authorization: `Bearer ${token}` },
      });
      setGifts(response.data);
      return response;
    }
    getGifts();
  }, []);

  return (
    <Container>
      {gifts.map(g => (
        <div>
          <h1>{g.name}</h1>
        </div>
      ))}
    </Container>
  );
};

export default GiftList;
