import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class GiftForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giver: this.props.gift.giver,
      winner: this.props.gift.winner,
      name: this.props.gift.name,
      description: this.props.gift.description,
      category: this.props.gift.category,
      condition: this.props.gift.condition,
      active: this.props.gift.active,
      interested_users: this.props.gift.interested_users,
      hours_active: this.props.gift.hours_active,
      image: this.props.gift.image,
    };
  }

  handleChange = event => {
    if ([event.target.name] === 'image') {
      this.setState({
        image: event.target.files,
      });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const gift = {
      giver: this.state.giver,
      winner: this.state.winner,
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      condition: this.state.condition,
      active: this.state.active,
      interested_users: this.state.interested_users,
      hours_active: parseInt(this.state.hours_active),
      image: null,
    };
    console.log(gift);
    this.props.submit(gift);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor=''>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Description</Form.Label>
          <Form.Control
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Category</Form.Label>
          <Form.Control
            type='text'
            name='category'
            value={this.state.category}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Condition</Form.Label>
          <Form.Control
            type='text'
            name='condition'
            value={this.state.condition}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Hours Active</Form.Label>
          <Form.Control
            type='number'
            name='hours_active'
            value={this.state.hours_active}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=''>Image</Form.Label>
          <Form.Control
            type='file'
            name='image'
            value={this.state.image}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default GiftForm;
