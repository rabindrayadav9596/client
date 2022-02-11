import React from 'react';
import Navbar from './components/Navbar';
import './styles/App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Scanner from './components/Scanner';
import LogIn from './components/LogIn';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/scanner' exact component={Scanner} />
        <Route path='/log-in' exact component={LogIn} />
        
      </Switch>
    </Router>
  );
  
}

export default App;
