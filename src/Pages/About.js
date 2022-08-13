import React from "react";
import './About.css';
import max from "../assets/MaxWang.JPG"
import chess from "../assets/chess.jpg"

function About(){
    return (<div>
            <h1>About Me</h1>
            <br></br>
            <img src={max} alt="Max" style={{width: 450, height: 400, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
            <br></br>
            <br></br>
            <br></br>
            <h6>My name is Maxwell Wang, I am currently a student at the University of Delaware class of 2024 majoring in computer science
                with a concentration in artificial intelligence. I'm aspiring to pursuing a career in Software Engineering, Artificial Intelligence,
                Web-Development. Currently, I am contributing to an undergradutate research project focusing in human-computer interaction. I've pursued my computer science career dream late in high school. In my senior year, I started programming in Java in 2019 and I have learned 
                a lot more. I have experiences working in Python, Java, C/C++, Javascript, TypeScript, React.js framework, HTML/CSS, Node.js with basic knowledge of C#, Unity, Git, 
               R, and Assembly language. Im currently learning SQL, .NET framework and maybe more programming languages. Outside of the computer science field, I have different interests which include:
            </h6>
            <br></br>
            <table class="center">
                <tr>
                    <td>Exercising</td>
                    <td> 
                        <p>I like to exercise daiy which includes biking, doing weight-resistant tranining, running or walking.
                        </p>
                    </td>
                </tr>
                
                <tr>
                <td>Chess <img src={chess} alt="chess" style={{width: 150, height: 100, display:"absolute", top:0, left:0, right:10, bottom:0}}></img></td>
                    <td> 
                        <p> I'm a massive chess fan and started joining the chess club in my school years and at the University.</p>
                    </td>
                </tr>
                <tr>
                    <td>Hiking</td>
                    <td><p>My first experience in hiking was when my family first traveled to the Grand Canyon and hiked on the trails. 
                        Even though, I did not like the hike as I was tired easily, I eventually started to enjoy hiking later in Southern Utah visiting national parks such as Arches, Zion, and others and enjoyed the nature and the scenery there. 
                        Here are some pictures in this link.</p>
                    </td>
                </tr>
                <tr>
                    <td>Miscellaneous</td>
                    <td>
                        <p>Other things that I like to do outside of tech are:
                            <ol>
                                <li>Traveling</li>
                                <li>Mathematics</li>
                                <li>Movies</li>
                                <li>Geography</li>
                                <li>Football (American term for soccer)</li>
                            </ol> 
                        </p>
                    </td>
                </tr>
            </table>
    </div>);
}

export default About;