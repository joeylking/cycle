import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ submit, submitLabel }) => {
  const [text, setText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    submit(text);
  };

  const handleChange = event => {
    setText(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as='textarea'
          rows='3'
          name='comment'
          onChange={handleChange}
        />
      </Form.Group>
      <Button type='submit'>{submitLabel}</Button>
    </Form>
  );
};

export default CommentForm;
