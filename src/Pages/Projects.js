import React from "react";
import udcsSchelduler from "../assets/Capture.JPG"
import "./Projects.css"

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
                    <p>UD Course Scheduler Frontend Website</p><img src={udcsSchelduler} alt="CISC Schelduler" style={{width:250, height:100, display: "absolute", top:0, left:10, right:0, bottom:10}}></img>
                    <a href="https://github.com/UD-CISC275-S22/cis-scheduler-team-007">For More Information, click here</a>
                </td>
                <td>
                <p>The features of the website allows undergraduate students to</p>
                    <ul>
                        <li>
                            A modal that greets students and gives instructions how to schedule courses
                        </li>
                        <li>
                            Add, change names and delete plans
                        </li>
                        <li>
                            Add, delete, name schedules set the season and the year of the semester
                        </li>
                        <li>Plan out courses throughout each semester</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
}

export default Projects;