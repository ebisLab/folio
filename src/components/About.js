import React from "react";

const About = () =>{
    return(
        <div>
        <h1>
           About E.B.'s Lab
        </h1>






        <div className="content cellSection">
                            
                                <div
                                    className="cells"
                                    style={{
                                        background: "red",
                                        width: "50%",
                                        backgroundImage: `url(/images/replate/img4.png)`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                    }}
                                ></div>

                        <div
                                    className="cells"
                                    style={{
                                        background: "white",
                                        width: "50%", width: "100%", height: "30vw", backgroundSize: 'cover'
                                    }}
                                ><h1>        
                                About E.B.'s Lab
                             </h1>

<p>
            Hello! My name is Eunice Baiden and I'm a fullstack developer with a focus in design.</p>



<p>On days where I’m not creating projects, you’ll find me somewhere around the world eating something I've never seen before, or staring at precious art at a museum.</p>
     <p> If not, then probably spending time with friends and family
        </p>

        <p>
            This site is created with 
            <li>React. </li>
            <li>CSS Animations</li>
            <li>Animanista CSS Library</li>
            
        </p>
                                
                                
                                </div>
                        </div>



        <p> © E.B.'s Lab {new Date().getFullYear()}</p>
        </div>
    )
}

export default About