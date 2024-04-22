import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Navigate to the home_dashboard route
    navigate('/home_dashboard');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="rounded-pill"
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="rounded-pill"
              />
            </FormGroup>

            <Button color="primary" block className="rounded-pill">
              Log In
            </Button>
          </Form>

          <div className="mt-3 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
