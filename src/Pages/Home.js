import React from "react";
import max from "../assets/MaxWang.JPG";

function Home(){
    return <div>
       <img src={max} alt="Max" style={{width: 250, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
        <p>My name is Maxwell Wang, an undergradutate junior studying computer science at the University of Delaware concentrating in artificial intelligence.
      </p>
      <p>Feel free to explore the different menu sections of my website</p>
      <p>Got any issues, submit it to the feedback button right on my website</p>
      <footer><small>This website was made with Javascript and the React.js framework.</small></footer>
    </div>
}

export default Home;