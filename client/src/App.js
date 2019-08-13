import React from 'react';
import NavBar from './components/NavBar'
import Members from './components/Members';
import Register from './components/Register'
import Home from './components/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <ProtectedRoute path='/members' component={Members}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='*' component={() => (<h5> 404 NOT FOUND </h5>)}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
