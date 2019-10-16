import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Users from './components/Users';


function App() {
  return (
    <div>
      <div className="App">
        {/* <SignIn /> */}
      </div>
      
      <Route component={SignIn} />
      <Route path='/login' component={SignIn} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
