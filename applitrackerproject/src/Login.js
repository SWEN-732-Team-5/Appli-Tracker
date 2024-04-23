import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from "react-router-dom";
import img from './components/img/bg_login.jpg';
import './Login.css'; // Import your custom CSS file

const Login = () => {
  const navigate = useNavigate();

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
      <Row className="login-container">
        <Col md={7} className="login-image-container">
          <br></br>
          <p style={{textAlign:'center', fontSize:'300%'}}> <b>Appli-Tracker</b></p><br></br>
          <img src={img} alt="Background" className="login-image" />
        </Col>
        <Col md={5} className="login-form-container">
          <div className="login-form">
            <h2 className="mt-4 mb-4">Log In</h2>
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

              <div className="text-center"> {/* Centering the login button */}
                <Button color="primary" type="submit">
                  LogIn
                </Button>
              </div>

              {/* <Link to="/signup">
                <Button color="primary">SignUp</Button>
              </Link> */}

            <div className="mt-3 text-center">
              Don't have an account?{' '}
            <Link to="/signup" className="text-primary">Sign Up</Link>
          </div>
            </Form>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
