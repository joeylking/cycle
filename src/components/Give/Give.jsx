import { Component } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
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

  render() {
    const filtered = this.props.gifts.filter(
      g => g.giver === this.props.user.id
    );
    return (
      <Container>
        <Button
          className='mt-2'
          onClick={() =>
            this.setState(
              {
                game: {
                  giver: this.props.user,
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
        {filtered.map(g => (
          <div>
            <h1>{g.name}</h1>
          </div>
        ))}
      </Container>
    );
  }
}

export default Give;
