import React from 'react';
import './App.css';

//components
import Appbar from './Components/Layout/Appbar/Appbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Home />
    </div>
  );
}

export default App;
