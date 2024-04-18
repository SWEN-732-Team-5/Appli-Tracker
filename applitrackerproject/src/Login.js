import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
// import './css/login.css';

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










// function Login() {

//   const navigate = useNavigate();

//   // Dummy login function for demonstration
//   const handleLogin = async (event) => {
//     event.preventDefault(); // Prevent the default form submission
    
//     // If login is successful, navigate to Dashboard
//     navigate('/home_dashboard');
//   };

//   return (
//     <div className="App">      
//       <main>
//         <div className="login-form">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//               <div>
//                 <div className="form-group">
//                   <input type="id" name="email_id" id="email_id" placeholder="Enter your id" required/>
//                   <br />
//                 </div>
//                 <div className="form-group">
//                   <input type="password" name="password" id="password"  placeholder="Enter your password" required/>
//                   <br />
//                 </div>
//                 <Button color="primary" type="submit">Login</Button>
//                 <div>
//                 <Link to="/signup">
//                   <Button color="secondary">Sign Up</Button>
//                 </Link>
//                 </div>
               
//               </div>
//           </form>
//         </div>
//       </main>     
//     </div>
//   );
// };

// export default Login;