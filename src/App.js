import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Switch, Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
          <Navbar />
       
       
          <Switch>
          <Route path='/' exact  components= {Home}/>
          </Switch>
            
            
          </Router>
        </>
        
      );
    }

export default App;
