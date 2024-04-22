import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    userSecKey: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const signUpUser = async (event) => {
    event.preventDefault();
    if (newUser.userSecKey !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    const apiEndpoint = 'http://localhost:8000/signup';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      const responseData = await response.json();
      if (response.ok) {
        toggleModal();
      } else {
        console.error('Failed to sign up user:', responseData);
      }
    } catch (error) {
      console.error('Failed to send user details:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={signUpUser}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
                className="rounded-pill"
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
                className="rounded-pill"
              />
            </FormGroup>

            <FormGroup>
              <Label for="userSecKey">Password</Label>
              <Input
                type="password"
                name="userSecKey"
                id="userSecKey"
                placeholder="Enter your password"
                value={newUser.userSecKey}
                onChange={(e) => setNewUser({ ...newUser, userSecKey: e.target.value })}
                required
                className="rounded-pill"
              />
            </FormGroup>

            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordsMatch(newUser.userSecKey === e.target.value);
                }}
                required
                className="rounded-pill"
              />
              {!passwordsMatch && (
                <span className="text-danger">Passwords do not match</span>
              )}
            </FormGroup>

            <Button color="primary" block className="rounded-pill">
              Sign Up
            </Button>
          </Form>

          <div className="mt-3 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-primary">Log In</Link>
          </div>
        </Col>
      </Row>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Success</ModalHeader>
        <ModalBody>
          Signed up successfully!
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default SignUp;
