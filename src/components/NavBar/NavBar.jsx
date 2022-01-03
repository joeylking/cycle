import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Modal, Container } from 'react-bootstrap';
import logo from '../../img/logo.svg';

const NavBar = ({ user, logout }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Cycle logo'
          />{' '}
          Cycle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            \
            {user && (
              <>
                <Nav.Link as={Link} to='/Give'>
                  Give
                </Nav.Link>
                <Nav.Link as={Link} to='/Interested'>
                  Interested
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {user && (
              <>
                <img
                  src={`http://127.0.0.1:8000${user.profile_pic}`}
                  width='30'
                  height='30'
                  className='d-inline-block align-top rounded-circle'
                  alt='Cycle logo'
                />
                <NavDropdown
                  title={user.first_name}
                  id='navbarScrollingDropdown'
                >
                  <NavDropdown.Item as={Link} to='/Profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/History'>
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to='/' onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            {!user && (
              <>
                <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>
                <Nav.Link as={Link} to='/Register'>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <LoginForm />
            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
