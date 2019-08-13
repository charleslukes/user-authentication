import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Auth from '../authUsers';

const Login = ({ history }) => {

  const obj = {};
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const value = await fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(obj)
      });

      const data = await value.json();

      localStorage.setItem('authuser', data.token);

      if (localStorage.length) {
        Auth.authenticate();
        history.push('/members');
      }

    } catch (error) {
      console.log('invalid user')
    }
  }

  return (
    <div className='register'>
      <h5>Login</h5>
      <div className='reg-form'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name='email' required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}


export default Login;