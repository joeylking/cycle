import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const GiftList = ({ user, gifts }) => {
  const active = gifts.filter(g => g.active === true);
  const filtered = active.filter(g => g.giver.id !== user.id);
  console.log(active);
  console.log(filtered);
  return (
    <Container>
      {filtered.map(g => (
        <div>
          <h1>{g.name}</h1>
        </div>
      ))}
    </Container>
  );
};

export default GiftList;
