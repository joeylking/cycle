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
    console.log(gift.image);
    let formField = new FormData();
    formField.append('name', name);
    formField.append('description', description);
    formField.append('category', category);
    formField.append('condition', condition);
    formField.append('hours_active', hoursActive);
    if (image === undefined) {
      formField.append('image', '');
    } else {
      formField.append('image', image);
    }

    submit(formField);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor=''>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor=''>Description</Form.Label>
        <Form.Control
          type='text'
          name='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor=''>Category</Form.Label>
        <Form.Select
          name='category'
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option>Select a category</option>
          <option value='Automotive'>Automotive</option>
          <option value='Electronics'>Electronics</option>
          <option value='Groceries'>Groceries</option>
          <option value='Arts & Crafts'>Arts & Crafts</option>
          <option value='Home & Kitchen'>Home & Kitchen</option>
          <option value='Office Supplies'>Office Supplies</option>
          <option value='Pet Supplies'>Pet Supplies</option>
          <option value='Books & Magazines'>Books & Magazines</option>
          <option value='Clothing'>Clothing</option>
          <option value='Beauty & Personal Care'>Beauty & Personal Care</option>
          <option value='Toys & Games'>Toys & Games</option>
          <option value='Garden & Outdoors'>Garden & Outdoors</option>
          <option value='Exercise & Fitness'>Exercise & Fitness</option>
          <option value='Cleaning Supplies'>Cleaning Supplies</option>
          <option value='Medice, Vitamins & Supplements'>
            Medice, Vitamins & Supplements'
          </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor=''>Condition</Form.Label>
        <Form.Select
          name='condition'
          value={condition}
          onChange={e => setCondition(e.target.value)}
        >
          <option>Select the condition</option>
          <option value='Like New'>Like New</option>
          <option value='Very Good'>Very Good</option>
          <option value='Good'>Good</option>
          <option value='Fair'>Fair</option>
          <option value='Needs Work'>Needs Work</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor=''>Hours Active</Form.Label>
        <Form.Control
          type='number'
          name='hoursActive'
          value={hoursActive}
          onChange={e => setHoursActive(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
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
