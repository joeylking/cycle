import { Component } from 'react';
import { Container, Button, Modal, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GiftForm from '../GiftForm/GiftForm';

class Give extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: {
        giver: this.props.user.id,
        winner: null,
        name: '',
        description: '',
        category: '',
        condition: '',
        active: true,
        interested_users: [],
        hours_active: 24,
      },
      showModal: false,
      activeModal: '',
    };
  }

  handleOpenModal = value =>
    this.setState({
      activeModal: value,
      showModal: true,
    });

  handleCloseModal = () => this.setState({ activeModal: '', showModal: false });

  handleAddSubmit = gift => {
    this.handleCloseModal();
    this.props.addGift(gift);
  };

  handleEditSubmit = gift => {
    this.handleCloseModal();
    this.props.editGift(gift, this.state.gift.id);
  };

  render() {
    const active = this.props.gifts.filter(g => g.active === true);
    const filtered = active.filter(
      g => g.giver.username === this.props.user.username
    );
    return (
      <Container>
        <Button
          className='mt-2'
          onClick={() =>
            this.setState(
              {
                gift: {
                  giver: this.props.user.id,
                  winner: null,
                  name: '',
                  description: '',
                  category: '',
                  condition: '',
                  active: true,
                  interested_users: [],
                  hours_active: 24,
                },
              },
              this.handleOpenModal('addNewGift')
            )
          }
        >
          Add a New Gift
        </Button>
        <Modal
          show={this.state.showModal && this.state.activeModal === 'addNewGift'}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a Gift</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GiftForm gift={this.state.gift} submit={this.handleAddSubmit} />
          </Modal.Body>
        </Modal>
        <ListGroup className='mt-2'>
          {filtered.map(g => (
            <ListGroup.Item key={g.id}>
              <h1>{g.name}</h1>
              <p>Interested: {g.interested_users.length}</p>
              <Link
                to='/Detail'
                className='btn btn-primary btn-sm me-2'
                onClick={() => this.props.setGift(g)}
              >
                Details
              </Link>
              <Button
                variant='success'
                size='sm'
                className='me-2'
                onClick={() =>
                  this.setState(
                    {
                      gift: {
                        id: g.id,
                        giver: this.props.user.id,
                        winner: null,
                        name: g.name,
                        description: g.description,
                        category: g.category,
                        condition: g.condition,
                        active: true,
                        interested_users: g.interested_users,
                        hours_active: g.hours_active,
                      },
                    },
                    this.handleOpenModal(g.id)
                  )
                }
              >
                Edit
              </Button>
              <Modal
                show={this.state.showModal && this.state.activeModal === g.id}
                onHide={this.handleCloseModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add a Gift</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <GiftForm
                    gift={this.state.gift}
                    submit={this.handleEditSubmit}
                  />
                </Modal.Body>
              </Modal>
              <Button
                variant='danger'
                size='sm'
                onClick={() => this.props.deleteGift(g)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default Give;
