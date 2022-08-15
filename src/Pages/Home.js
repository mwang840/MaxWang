import React from "react";
import max from "../assets/MaxWang.JPG";
import "./Home.css"

function Home(){
    return <div>
       <h1>Welcome</h1>
       <img src={max} alt="Max" style={{width: 300, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
        <p>My name is Maxwell Wang, an undergradutate junior studying computer science at the University of Delaware concentrating in artificial intelligence. 
          <br></br>Feel free to explore the different menu sections on the top of my website.
      </p>
      <p>If the website has any issues, submit it under the contacts page.</p>
      <br></br>
      <footer><small>This website was made with Javascript and the React.js framework.</small></footer>
    </div>
}

export default Home;