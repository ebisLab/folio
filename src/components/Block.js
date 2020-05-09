import React from "react";

const Block = ({info}) =>{
    return(
        <a className="column" 
        style={{backgroundImage: `url(${info.imgUrl})`}} 
        href="/gross">

        <div data-tab="illustrations"  >
            <div className="variant">
                <h2>{info.category}</h2>
                <h1>{info.title}</h1>
                <br/>

                </div>
            </div>
            </a>

    )
}

export default Block