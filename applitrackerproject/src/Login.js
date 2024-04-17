import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  // Dummy login function for demonstration
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Here, you would usually have code to check credentials, for example:
    // const credentials = { email_id: event.target.email_id.value, password: event.target.password.value };
    // const loginResponse = await loginService(credentials);
    
    // If login is successful, navigate to Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="App">      
      <main>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
              <div>
                <div className="form-group">
                  <input type="id" name="email_id" id="email_id" placeholder="Enter your id" required/>
                  <br />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password"  placeholder="Enter your password" required/>
                  <br />
                </div>
                <Button color="primary" type="submit">Login</Button>
                <div>
                <Link to="/signup">
                  <Button color="secondary">Sign Up</Button>
                </Link>
                </div>
               
              </div>
          </form>
        </div>
      </main>     
    </div>
  );
};

export default Login;