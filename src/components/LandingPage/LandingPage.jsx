import hero from '../../img/give.jpg';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container fluid>
      <img
        src={hero}
        alt='hero'
        style={{
          width: '100%',
          margin: '0',
          padding: '0',
          position: 'relative',
        }}
      />
    </Container>
  );
};

export default LandingPage;
