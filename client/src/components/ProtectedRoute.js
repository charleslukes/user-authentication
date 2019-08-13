import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './authUsers';

const ProtectedRoute = ({component: Component, ...rest}) => {

  console.log('from protected...', Auth.getAuth());
  return (
    <Route {...rest} render = {
     props => {
      if (Auth.getAuth()) {
        return <Component {...props}/>
      }
      else {
        return <Redirect to={{pathname: "/register"}} />
      }
     } 
    }/>
  )
}

export default ProtectedRoute;