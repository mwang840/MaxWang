import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import { Routes, Route } from 'react-router-dom';
import { faGithub, faLinkedin, faJs, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <footer>
      <a href="https://github.com/mwang840"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
      <a href="https://www.linkedin.com/in/maxwell-wang-02595a1b9/"><FontAwesomeIcon icon = {faLinkedin} size="2x"/></a>
      <a href="https://www.youtube.com/channel/UCHCqPwHUde2P-idHPUTMoqA"><FontAwesomeIcon icon = {faYoutubeSquare} color="red" size="2x"/></a>
      <FontAwesomeIcon icon={faJs} color="yellow" size="2x"/>
      </footer>
    </div>
  );
}

export default App;
