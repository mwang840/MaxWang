import React from "react";
import udcsSchelduler from "../assets/Capture.JPG"

function Projects(){
    return <div>
        <h1>Projects</h1>
        <h5>A description of the personal projects that I have worked on during on the course of my study</h5>
        <h5>The projects listed are diverse in languages and purposes and each entry down below has a link to its github repository.</h5>
        <h5>Whether it be testing out what I have learned during school or learning a new programming concept during a project that I am working on, I learn something new. And with the help of the internet and google, I can learn more things and even add cool features for this website.</h5>
        <br></br>
        <table class="center">
            <tr>
                <td>
                    UD Course Scheduler Frontend Website<img src={udcsSchelduler} alt="CISC Schelduler" style={{width:500, height:200, display: "absolute", top:0, left:10, right:0, bottom:10}}></img>
                </td>
                <td>
                <p>Written in TypeScript with React.js library + with two other undergraduate students, we were able to design a website that is able to generate a four-year plan for Computer Science/Information Science Majors or Minors. On our website, the clients are able to add, delete or change plans, schedules for each semester and add or delete each course per semester.</p>
                </td>
            </tr>
        </table>
    </div>
}

export default Projects;