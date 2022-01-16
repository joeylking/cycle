import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const GiftForm = ({ gift, submit }) => {
  const [name, setName] = useState(gift.name);
  const [description, setDescription] = useState(gift.description);
  const [category, setCategory] = useState(gift.category);
  const [condition, setCondition] = useState(gift.condition);
  const [hoursActive, setHoursActive] = useState(gift.hours_active);
  const [image, setImage] = useState(gift.image);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(image);
    let formField = new FormData();
    formField.append('name', name);
    formField.append('description', description);
    formField.append('category', category);
    formField.append('condition', condition);
    formField.append('hours_active', hoursActive);
    formField.append('image', image);
    submit(formField);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor=''>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>Description</Form.Label>
        <Form.Control
          type='text'
          name='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>Category</Form.Label>
        <Form.Control
          type='text'
          name='category'
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>Condition</Form.Label>
        <Form.Control
          type='text'
          name='condition'
          value={condition}
          onChange={e => setCondition(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>Hours Active</Form.Label>
        <Form.Control
          type='number'
          name='hoursActive'
          value={hoursActive}
          onChange={e => setHoursActive(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor=''>Image</Form.Label>
        <Form.Control
          type='file'
          name='image'
          onChange={e => setImage(e.target.files[0])}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default GiftForm;
