import { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GiftList = ({ user, gifts, addInterested, setGift }) => {
  const active = gifts.filter(g => g.active === true);
  const filtered = active.filter(g => g.giver.id !== user.id);

  const interestedClick = eGift => {
    if (!eGift.interested_users.includes(user.id)) {
      eGift.interested_users.push(user.id);
      addInterested(eGift);
    } else {
      console.log('Already interested');
    }
  };

  const handleClick = gift => {
    setGift(gift);
  };
  return (
    <Container>
      <Row className='justify-content-center d-flex flex-wrap align-items-center mt-3'>
        {filtered.map(gift => (
          <Col>
            <Card className='text-centered' style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={`http://127.0.0.1:8000${gift.image}`}
                style={{ height: 100, width: 100 }}
              />
              <Card.Body>
                <Card.Title>{gift.name}</Card.Title>
                <Card.Text>{gift.description}</Card.Text>
                <Link
                  to='/Detail'
                  className='btn btn-primary'
                  onClick={() => handleClick(gift)}
                >
                  Details
                </Link>{' '}
                <Button variant='primary' onClick={() => interestedClick(gift)}>
                  Interested
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GiftList;
