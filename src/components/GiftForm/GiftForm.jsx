import { Component } from 'react';

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
      expiration: this.props.gift.expiration,
      image: this.props.gift.image,
    };
  }
  // {
  //     "giver": 3,
  //     "winner": null,
  //     "name": "Busted guitar",
  //     "description": "Damaged guitar",
  //     "category": "Musical Instruments",
  //     "condition": "Poor",
  //     "active": true,
  //     "interested_users": [10, 11, 12],
  //     "expiration": "2022-01-03T22:10:28Z"
  // }
  handleChange = event => {
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
      expiration: this.state.expiration,
    };
    this.props.submit(gift);
  };
  render() {
    return (
      <Form onSubmit={handleSubmit}>
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
          <Form.Label htmlFor=''>Expiration</Form.Label>
          <Form.Control
            type='datetime-local'
            name='date'
            value={this.state.expiration}
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
