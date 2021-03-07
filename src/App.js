import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Feedback />
    </div>
  );
}

export default App;
