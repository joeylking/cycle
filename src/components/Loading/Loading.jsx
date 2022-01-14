import { Container, Col, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Container>
      <Col className='mt-5 ms-5'>
        <Spinner animation='border' role='status' className='mt-5 ms-5'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Col>
    </Container>
  );
};

export default Loading;
