import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import DashBoard from './pages/dashBoard/DashBoard';
import Application from './pages/application/Application';
import Assessment from './pages/assessment/Assessment';
import admin from './pages/admin/admin';
import adminBoard from './pages/adminBoard/adminBoard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={DashBoard} />
        <Route exact path='/application/:id' component={Application} />
        <Route exact path='/assessment' component={Assessment} />
        <Route exact path='/admin' component={admin} />
        <Route exact path='/adminBoard' component={adminBoard} />
      </Switch>
    </div>
  );
}

export default App;
