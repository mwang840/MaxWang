import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import max from "./assets/MaxWang.JPG";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <img src={max} alt="Max" style={{width: 250, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
      <h1>Welcome!</h1>
      <p>My name is Maxwell Wang, an undergradutate junior studying computer science at the University of Delaware.
      </p>
      <p>If you want to learn more from, me, feel free to explore the different menu sections of my website</p>
      <footer><small>This website was made with Javascript and the React.js framework.</small></footer>
      <p>Got any issues, submit it to the feedback button right on my website</p>
    </div>
  );
}

export default App;