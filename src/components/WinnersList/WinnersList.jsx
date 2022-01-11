import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const WinnersList = gifts => {
  console.log(gifts);
  const filtered = gifts.gifts.filter(gift => gift.winner !== null);
  return (
    <Container>
      <ListGroup>
        {filtered.map(g => (
          <>
            <ListGroup.Item>
              {g.name} - Given to {g.winner.username} by {g.giver.username}
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
    </Container>
  );
};

export default WinnersList;
