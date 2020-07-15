import React from "react";

const About = () =>{
    return(
        <div>
        <h1>
           About E.B.'s Lab
        </h1>






        <div style={{ fontFamily: 'Sulphur Point, sans-serif'}} className="content cellSection" >
                            
                                <div
                                    className="cells"
                                    style={{
                                        width: "50%",
                                        backgroundImage: `url(/images/img/img1.jpg)`, width: "100%", height: "50vw", backgroundSize: 'cover'
                                    }}
                                ></div>

                        <div
                                    className="cells"
                                    style={{
                                        background: "white",
                                        width: "50%", width: "100%", height: "30vw", backgroundSize: 'cover',
                                        textAlign: "left"
                                    }}
                                >
                                    {/* <h1>        
                                About E.B.'s Lab
                             </h1> */}
<div style={{margin: 40}}>
<h2>
            Hello! My name is Eunice Baiden and I'm a fullstack developer with design in mind. I build beautiful and interactive web applications that cater to clients and users specific needs</h2>



<p>On days where I’m not creating projects, you’ll find me somewhere around the world eating something I've never seen nor tried before, or staring at precious art at a museum.</p>
     <p> If not, then probably spending time with friends and family
        </p>



        <p>
            Tech Stacks
            <ul className="reset" style={{display: "inline-flex"}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node JS</li>
                <li>Python</li>
                <li>Less</li>
                <li>Sass</li>
            </ul>
        </p>

        <p>
            This site is created with 
            <ul className="reset">
            <li>React. </li>
            <li>CSS Animations</li>
            <li>Animanista CSS Library</li>
            </ul>
            
        </p>
                                
                                
                                </div>
                        </div>
</div>


        <p> © E.B.'s Lab {new Date().getFullYear()}</p>
        </div>
    )
}

export default About