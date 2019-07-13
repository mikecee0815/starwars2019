import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'



function App() {
  let appCss = {
    width:'85%',
    display:'flex',
    flexDirection:'column'
  }
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Contact' component={Contact}/>  
        <Footer/>    
      </div>
    </Router>
    
    
  );
}

export default App;
