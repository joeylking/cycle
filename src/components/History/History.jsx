import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const History = ({ user, gifts }) => {
  const inactiveGifts = gifts.filter(gift => gift.active === false);
  const givenGifts = inactiveGifts.filter(gift => gift.giver.id === user.id);
  const receivedGifts = inactiveGifts.filter(
    gift => gift.winner.id === user.id
  );
  return (
    <Container className='mt-2'>
      <Row>
        <Col>
          <ListGroup>
            Given:
            {givenGifts.map(gift => (
              <ListGroup.Item>
                {gift.name} - Given to {gift.winner.username}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            Received:
            {receivedGifts.map(gift => (
              <ListGroup.Item>
                {gift.name} - Received from {gift.giver.username}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
