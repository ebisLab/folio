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



            Skills & Tech Stack
            <p>
            <ul className="reset" style={{display: "inline-flex"}}>
                <li> <i class="devicon-html5-plain-wordmark colored"></i> HTML</li>
                <li> <i class="devicon-css3-plain-wordmark colored"></i> CSS</li>
                <li> <i class="devicon-javascript-plain colored"></i> JavaScript</li>
                <li> <i class="devicon-react-original colored"></i> React</li>
                <li> <i class="devicon-nodejs-plain colored"></i> Node JS</li>
                <li> <i class="devicon-express-original-wordmark"></i> Express </li>
                <li> <i class="devicon-python-plain"></i> Python</li>
                <li> <i class="devicon-less-plain-wordmark colored"></i> Less</li>
                <li> <i class="devicon-sass-original colored"></i>Sass</li>
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



      
            This site is created with 
            <ul className="reset">
            <li>React. </li>
            <li>CSS Animations</li>
            <li>Animanista CSS Library</li>
            </ul>
            

                                
                                
                                </div>
                        </div>
</div>


        <p> © E.B.'s Lab {new Date().getFullYear()}</p>
        </div>
    )
}

export default About