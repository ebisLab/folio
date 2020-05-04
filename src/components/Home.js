import React from "react";

const Home = () =>{
    return(
        <div>
             <h1>
            This is the home
        </h1>
            <nav>
                <ul>
                    <li>Illustrations</li>
                    <li>Graphs</li>
                    <li>FullStack</li>
                    <li>UI</li>


                </ul>
            </nav>

            <div className="row">
                <div className="column" style={{background: "aquamarine"}}></div>
                <div className="column" style={{background: "lightpink"}}>Stuff</div>
                <div className="column" style={{background: "gold"}}>Stuff</div>
                <div className="column" style={{background: "greenyellow"}}>Stuff</div>
            </div>
       
        </div>
    )
}

export default Home