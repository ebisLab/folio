import React from "react";

const About = () =>{
    return(
        <div>
        <h1>
           About E.B.'s Lab
        </h1>
        <p>
            This site is created with 
            <li>React. </li>
            <li>CSS Animations</li>
            <li>Animanista CSS Library</li>
            
        </p>
        <p> © E.B.'s Lab {new Date().getFullYear()}</p>
        </div>
    )
}

export default About