import React from "react";
import {Button} from "../components/Button";
import max from "../assets/MaxWang.JPG";
import "./Home.css"

function Home(){
    return <div>
       <h1>Welcome</h1>
       <img src={max} alt="Max" style={{width: 250, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
        <p>My name is Maxwell Wang, an undergradutate junior studying computer science at the University of Delaware concentrating in artificial intelligence. 
          <br></br>Feel free to explore the different menu sections of my website.
      </p>
      <br></br>
      <p>Got any issues, submit it to the feedback button right on my website!</p>
      <Button>Feedback</Button>
      <footer><small>This website was made with Javascript and the React.js framework.</small></footer>
    </div>
}

export default Home;