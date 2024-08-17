import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

//components
import Appbar from './Components/Layout/Appbar/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar />
    </div>
  );
}

export default App;
