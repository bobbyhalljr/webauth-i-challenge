import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Users from './components/Users';
import PrivateRoute from './components/PrivateRoute';


function App(props) {
  return (
    <div>
      <div className="App">
        {/* <SignIn /> */}
      </div>
      
      <Route exact path='/api/register' component={SignIn} />
      <Route exact path='/api/login' component={SignIn} />
      <PrivateRoute exact path='/api/users' render={props => <Users />} />
    </div>
  );
}

export default App;
