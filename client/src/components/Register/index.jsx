import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css'

const Register = ({ history }) => {
  const obj = {};
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3005/api/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(data => history.push('/login'))
      .catch(err => console.log(err));
  }

  return (
    <div className='register'>
      <h5>Register Here!!!</h5>
      <div className='reg-form'>
        <Form encType="multipart/form-data" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='name' required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' required onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter a username" name='username' required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='confirm' required onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicProfilePice">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control type="file" name='profilePic' onChange={handleChange} />
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