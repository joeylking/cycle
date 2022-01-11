import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
import axios from 'axios';
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm';

const UserProfile = ({ user, getUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState();

  const handleOpenModal = value => {
    setActiveModal(value);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setActiveModal('');
    setShowModal(false);
  };

  const handleEditSubmit = edited => {
    editProfile(edited);
    handleCloseModal();
  };

  const editProfile = async edited_user => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'PUT',
      url: `http://127.0.0.1:8000/api/auth/update_profile/${user.id}/`,
      data: edited_user,
      headers: { Authorization: `Bearer ${token}` },
    });
    getUser(token);
  };

  return (
    <Container>
      <Row className='mt-2'>
        <Col>
          <img
            src={`http://127.0.0.1:8000${user.profile_pic}`}
            width='150'
            height='150'
            className='rounded-circle mt-3'
            alt={user.first_name}
          />
        </Col>
        <Col className='md-9'>
          <h1>
            {user.first_name} {user.last_name} - {user.username}
          </h1>
          <p>
            {user.street} {user.city}, {user.state}
          </p>
          <Button
            size='sm'
            className='me-2'
            onClick={() => handleOpenModal('profile')}
          >
            Edit Profile
          </Button>
          <Modal
            show={showModal && activeModal === 'profile'}
            onHide={handleCloseModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserProfileForm user={user} submit={handleEditSubmit} />
            </Modal.Body>
          </Modal>
          <Button size='sm' onClick={() => handleOpenModal('password')}>
            Change Password
          </Button>
          <Modal
            show={showModal && activeModal === 'password'}
            onHide={handleCloseModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ChangePasswordForm user={user} closeModal={handleCloseModal} />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
