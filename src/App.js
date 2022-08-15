import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
