import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate (); 
  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    console.log("Form submitted");
    navigate('/home_dashboard');
  };
 
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mt-4 mb-4">LogIn</h2>
          <Form onSubmit={handleSubmit}>
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


            <Button color="primary" type="submit">
              LogIn
            </Button>

            <Link to="/signup">
                  <Button color="primary">SignUp</Button>
            </Link>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;