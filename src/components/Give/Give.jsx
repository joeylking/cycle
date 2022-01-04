import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

const Give = ({ gifts, user }) => {
  const [gift, setGift] = useState(emptyGift);
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState();
  const emptyGift = {
    giver: { user },
    winner: null,
    name: '',
    description: '',
    category: '',
    condition: '',
    active: true,
    interested_users: [],
    expiration: '',
  };
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
