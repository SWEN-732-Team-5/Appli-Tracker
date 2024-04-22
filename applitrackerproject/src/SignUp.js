import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom";

const SignUp = () => {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    userSecKey: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // New state variable to track password match status
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const signUpUser = async (event) => {
    event.preventDefault();
    if (newUser.userSecKey !== confirmPassword) {
      // If passwords don't match, update passwordsMatch state and return
      setPasswordsMatch(false);
      return;
    }
    // If passwords match, proceed with sign-up process
    const apiEndpoint = 'http://localhost:8000/signup'; // Replace with the actual endpoint
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      const responseData = await response.json();
      if (response.ok) {
        console.log('User signed up:', responseData);
        toggleModal(); // Open the success modal
        // Optionally, you can redirect the user or show a success message here
      } else {
        console.error('Failed to sign up user:', responseData);
        // Optionally, you can display an error message to the user
      }
    } catch (error) {
      console.error('Failed to send user details:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mt-4 mb-4">Sign Up</h2>
          <Form onSubmit={signUpUser}>
            <FormGroup row>
              <Label for="name" sm={3}>
                Name
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value})}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="email" sm={3}>
                Email
              </Label>
              <Col sm={9}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value})}
                  required
                />
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label for="userSecKey" sm={3}>
                Password
              </Label>
              <Col sm={9}>
                <Input
                  type="password"
                  name="userSecKey"
                  id="userSecKey"
                  placeholder="Enter your password"
                  value={newUser.userSecKey}
                  onChange={(e) => setNewUser({ ...newUser, userSecKey: e.target.value})}
                  required
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="confirmPassword" sm={3}>
                Confirm Password
              </Label>
              <Col sm={9}>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    // Check if passwords match and update passwordsMatch state accordingly
                    setPasswordsMatch(newUser.userSecKey === e.target.value);
                  }}
                  required
                />
                {!passwordsMatch && (
                  <span className="text-danger">Passwords do not match</span>
                )}
              </Col>
            </FormGroup>

            <Button color="primary" type="submit">
              Sign Up
            </Button>

            <Link to="/login">
              <Button color="secondary">Log In</Button>
            </Link>

          </Form>
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
