import React from "react";

const About = () =>{
    return(
        <div style={{marginTop: "70px"}}>






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
            Hello! My name is Eunice Baiden and I'm a fullstack developer with design in mind. I build beautiful and interactive web applications that help solve clients and customers' problems</h2>



<p>On days where I’m not creating projects, you’ll find me somewhere around the world exploring different cultures and trying out new foods, as well as watching fashion shows for creative inspiration. </p>
     <p> And on my downtime, I love spending time with friends and family
        </p>



            
            <p>
            Skills & Tech Stack
            <ul className="reset" style={{display: "inline-flex", padding: 0}}>
                <li> <i className="devicon-html5-plain-wordmark colored"></i> HTML</li>
                <li> <i className="devicon-css3-plain-wordmark colored"></i> CSS</li>
                <li> <i className="devicon-javascript-plain colored"></i> JavaScript</li>
                <li> <i className="devicon-react-original colored"></i> React</li>
                <li> <i className="devicon-nodejs-plain colored"></i> Node JS</li>
                <li> <i className="devicon-express-original-wordmark"></i> Express </li>
                <li> <i className="devicon-python-plain"></i> Python</li>
                <li> <i className="devicon-less-plain-wordmark colored"></i> Less</li>
                <li> <i className="devicon-sass-original colored"></i>Sass</li>
            </ul>
            </p>
            
            {/* <p>
            <ul className="reset" style={{display: "inline-flex"}}>
                <li> <i class="devicon-html5-plain-wordmark colored"></i> Styled Components</li>
                <li> <i class="devicon-css3-plain-wordmark colored"></i> Semantic UI</li>
                <li> <i class="devicon-javascript-plain colored"></i> Axios</li>
                <li> <i class="devicon-react-original colored"></i> GraphQL</li>
                <li> <i class="devicon-nodejs-plain colored"></i> Netlify</li>
                <li> <i class="devicon-python-plain"></i> Varcel/Zeit</li>
                <li> <i class="devicon-less-plain-wordmark colored"></i> Heroku</li>
                <li> <i class="devicon-sass-original colored"></i>Git</li>
                <li> <i class="devicon-sass-original colored"></i>Jest</li>
                <li> <i class="devicon-sass-original colored"></i>React Testing Library</li>
                <li> <i class="devicon-sass-original colored"></i>Cypress</li>
            </ul>
            </p> */}



      
            {/* This site is created with 
            <ul className="reset">
            <li>React. </li>
            <li>CSS Animations</li>
            <li>Animanista CSS Library</li>
            </ul> */}
            <ul style={{textAlign: "center", padding: 0}}>
            <a href="https://www.linkedin.com/in/eunice-baiden/"><li><i className="fa fa-linkedin-square" style={{fontSize:"20px", color: "gray"}}></i></li></a>
                      <a href="https://github.com/ebisLab" ><li><i className="fa fa-github" style={{fontSize:"24px", color: "gray"}}></i></li></a>
                          
                      <a href="mailto:ebaiden@techie.com" style={{margin: "20px",padding: "20px"}}><i className="fa fa-envelope-o" style={{fontSize:"20px", color: "gray"}}></i></a>

            </ul>

                                
                                
                                </div>
                        </div>
</div>


        <p> © E.B.'s Lab {new Date().getFullYear()}</p>
        </div>
    )
}

export default About