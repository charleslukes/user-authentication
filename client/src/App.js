import React from 'react';
import NavBar from './components/NavBar'
import Members from './components/Members';
import Register from './components/Register'
import Home from './components/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar />
      <Switch>
      <Route path='/home' exact component={Home}/>
      <Route path='/members' component={Members}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
