import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

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
          <InputGroup>
            <Form.Control
              type='text'
              name='search'
              placeholder='Search...'
              className='border-end-0'
              onChange={handleChange}
            />
            <InputGroup.Text className='border-start-0 bg-white'>
              <SearchIcon />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
