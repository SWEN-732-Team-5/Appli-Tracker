import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate (); 
  
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const userSecKey = formData.get('password');

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, userSecKey })
      });

      if (!response.ok) {
        alert("Invalid credentials");
        throw new Error('Login failed');
      }

      const responsejson = await response.json();
      console.log(responsejson);
      if(responsejson.message === "INVALID")
      {
        alert("INVALID Credentials");
      }
      else 
      {
        alert("Login successfull");
        navigate('/home_dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle login failure
    }
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