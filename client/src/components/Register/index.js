import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './styles.css'

const Register = () => {
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
      <h5>Register Here!!!</h5>
    <div className='reg-form'>
    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name='name' onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter a username" name='username' onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='confirm-password' onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Profile Image</Form.Label>
    <Form.Control type="file" name='image' onChange={handleChange}/>
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
   </Form>
    </div>
    </div>
  )
}

export default Register;