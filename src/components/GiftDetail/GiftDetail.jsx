import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GiftDetail = ({ gift, user, addInterested }) => {
  const [comments, setComments] = useState([]);
  const [giver, setGiver] = useState([]);

  useEffect(() => {
    getComments(gift.id);
    console.log('giftdetail useeffect');
  }, []);

  const getComments = async gift_id => {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `http://127.0.0.1:8000/api/comments/${gift_id}/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setComments(response.data);
  };

  const interestedClick = gift => {
    if (!gift.interested_users.includes(user.id)) {
      gift.interested_users.push(user.id);
      addInterested(gift);
    } else {
      console.log('Already interested');
    }
  };

  return (
    <Container>
      {console.log(gift)}
      {console.log(comments)}
      <Row className='mt-2'>
        <Col>
          <img src={`http://127.0.0.1:8000${gift.image}`} />
        </Col>
        <Col>
          <h1>{gift.name}</h1>
          {/* <p>Given by: {gift.giver}</p>
          <p>Listed: {gift.created}</p> */}
          <p>Condition: {gift.condition}</p>
          <p>Description: {gift.description}</p>
          <Button variant='primary' onClick={() => interestedClick(gift)}>
            Interested
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='mt-2'>
          <h2>Comments:</h2>
          <Button size='sm'>Add a Comment</Button>
          {comments.map(comment => (
            <div>
              {console.log(comment.content)}
              <h3>{comment.author}</h3>
              <p>{comment.content}</p>
              <Button size='sm'>Reply</Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default GiftDetail;
