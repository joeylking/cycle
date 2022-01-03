import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Give = ({ gifts, user }) => {
  const filtered = gifts.filter(g => g.giver.id === user.id);
  return (
    <Container>
      <Button className='mt-2'>Add a New Gift</Button>
      {filtered.map(g => (
        <div>
          <h1>{g.name}</h1>
        </div>
      ))}
    </Container>
  );
};

export default Give;
