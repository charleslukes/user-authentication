import React from 'react';
import {Form, Button} from 'react-bootstrap'
const Login = () => {

  const obj = {};
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj)
  }

  return (
    <div className='register'>
      <h5>Login</h5>
    <div className='reg-form'>
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter a username" name='username' onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
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