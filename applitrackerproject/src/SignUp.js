import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const SignUp = () => {
 
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mt-4 mb-4">Signup</h2>
          <Form >
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
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="position" sm={3}>
                Position
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Enter your position"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={3}>
                Password
              </Label>
              <Col sm={9}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
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
                  required
                />
              </Col>
            </FormGroup>
            {}

            <Button color="primary" type="submit">
              Sign Up
            </Button>

            <Link to="/login_nightclub">
                  <Button color="primary">LogIn</Button>
            </Link>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
