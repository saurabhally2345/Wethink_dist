import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './homePage/home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Registration from './registration/registration';
import SignIn from './SignIn/SignIn';

function App() {
  return (
    <div className="App">
<Router>
  <Route exact path="/" component={Home}/>
  <Route exact path="/registration" component={Registration}/>
  <Route exact path="/signin" component={SignIn}/>
</Router>
 
    </div>
  );
}

export default App;
