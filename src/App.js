import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import max from "./assets/MaxWang.JPG";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <img src={max} alt="Max" style={{width: 400, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
    </div>
  );
}

export default App;
