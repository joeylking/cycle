import '../LandingPage/LandingPage.css';
import hero from '../../img/give.jpg';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <>
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
      <div className='hero-text'>
        <h1>Cycle</h1>
        <p>Give, Receive, Build Community</p>
      </div>
    </>
  );
};

export default LandingPage;
