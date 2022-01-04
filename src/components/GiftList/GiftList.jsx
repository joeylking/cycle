import { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const GiftList = ({ user, gifts, addInterested }) => {
  const [gift, setGift] = useState();
  const active = gifts.filter(g => g.active === true);
  const filtered = active.filter(g => g.giver !== user.id);
  console.log(active);
  console.log(filtered);
  console.log(user.id);

  const interestedClick = eGift => {
    if (!eGift.interested_users.includes(user.id)) {
      eGift.interested_users.push(user.id);
      addInterested(eGift);
    } else {
      console.log('Already interested');
    }
  };
  return (
    <Container>
      <Row className='justify-content-center d-flex flex-wrap align-items-center mt-3'>
        {filtered.map(g => (
          <Col>
            <Card className='text-centered' style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={`http://127.0.0.1:8000${g.image}`}
                style={{ height: 100, width: 100 }}
              />
              <Card.Body>
                <Card.Title>{g.name}</Card.Title>
                <Card.Text>{g.description}</Card.Text>
                <Button variant='primary'>Details</Button>{' '}
                <Button variant='primary' onClick={() => interestedClick(g)}>
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
