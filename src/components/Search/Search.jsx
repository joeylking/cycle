import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Search = ({ gifts, filterGifts }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    filterGifts(query);
  }, [query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };
  return (
    <Container className='mt-2'>
      <Row className='justify-content-md-center'>
        <Col xs lg='4'>
          <Form.Control
            type='text'
            name='search'
            placeholder='Search...'
            onChange={handleChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
