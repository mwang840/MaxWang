import React from "react";
import './About.css';
import max from "../assets/MaxWang.JPG"
import chess from "../assets/chess.jpg"
import workout from "../assets/workout.jpg"
import utah from "../assets/utah.jpg"

function About(){
    return (<div>
            <h1>About Me</h1>
            <br></br>
            <img src={max} alt="Max" style={{width: 300, height: 200, display:"absolute", top:0, left:0, right:10, bottom:0}}></img>
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
                    <td>Exercising <img src={workout} alt="exercising" style={{width:150, height: 100, display: "absolute", top:0, left:10, right:0, bottom:10}}></img></td>
                    <td> 
                        <p>I like to exercise daiy which includes biking, doing weight-resistant tranining, running, walking or training at the gym.
                        </p>
                    </td>
                </tr>
                
                <tr>
                <td>Chess <img src={chess} alt="chess" style={{width: 150, height: 100, display:"absolute", top:0, left:10, right:0, bottom:0}}></img></td>
                    <td> 
                        <p> I'm a massive chess fan and started joining the chess club in my school years and at the University.</p>
                    </td>
                </tr>
                <tr>
                    <td>Hiking <img src={utah} alt="Kolob Canyon" style={{width: 150, height: 100, display:"absolute", top:0, left:10, right:0, bottom:0}}></img></td>
                    <td><p>My first experience in hiking was when my family first traveled to the Grand Canyon and hiked on the trails. 
                        Even though, I did not like the hike as I was tired easily, I eventually started to enjoy hiking later in Southern Utah visiting national parks such as Arches, Zion, and others and enjoyed the nature and the scenery there. 
                       </p>
                    </td>
                </tr>
                <tr>
                    <td>Miscellaneous</td>
                    <td>
                        <p>Other things that I like to do outside of tech are:
                            <ol>
                                <li>Aviation</li>
                                <li>Traveling: I've been to East Asia and the Western United States. Someday, I'm hoping</li>
                                <li>Mathematics</li>
                                <li>Movies/TV: Although I rarely watch TV/Movies, I've gotten into the passion of horror movies. If you are into superheroes, I recommend <i>The Boys</i> a fun tv show to watch.</li>
                                <li>Geography</li>
                                <li>Photography</li>
                                <li>Football: I'm a big Tottenham Fan and enjoy my team playing in the English Premier League. Even though my club has not won a trophy, I still admire the players.</li>
                            </ol> 
                        </p>
                    </td>
                </tr>
            </table>
    </div>);
}

export default About;