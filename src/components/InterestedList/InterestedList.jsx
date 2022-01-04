import { ListGroup, Container } from 'react-bootstrap';

const InterestedList = ({ gifts, user }) => {
  console.log(user);
  const filtered = gifts.filter(g => g.interested_users.includes(user.id));
  return (
    <Container>
      <ListGroup>
        {filtered.map(g => (
          <ListGroup.Item>{g.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default InterestedList;
