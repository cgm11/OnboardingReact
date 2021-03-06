import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/home/home';
import Introduction from './components/introduction/introduction';
import CareerPath from './components/career-path/career-path';
import Triforce from './components/triforce/triforce';
import Fci3 from './components/fci3/fci3';
import KeyPeople from './components/key-people/keyPeople';
import Ready from './components/ready/ready';
import Studios from './components/studios/studios';

function App() {

  return (
    <Router>
      <div className="App">
        <Route path = "/" exact component = {Home}/>
        <Route path = "/intro/:name" component = {Introduction}/>
        <Route path = "/career/:name" component = {CareerPath}/>
        <Route path = "/triforce/:name" component = {Triforce}/>
        <Route path = "/fci3" component = {Fci3}/>
        <Route path = "/people" component = {KeyPeople}/>
        <Route path = "/ready" component = {Ready}/>
        <Route path = "/studios/:name" component = {Studios}/>
      </div>
    </Router>
  );
}

export default App;
