import logo from './logo.svg';
import './App.css';
import Pig from './components/Pig';
import { React, useState } from 'react';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Pig></Pig>
      </div>
    </div>
  );
}

export default App;
