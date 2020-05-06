import React from "react";

const Block = ({info}) =>{
    return(
        <a className="column" href="/gross">

        <div data-tab="illustrations"  >
            <span className="variant">
                <h2>{info.category}</h2>
                <h1>{info.title}</h1>
                <br/>

                </span>
            </div>
            </a>

    )
}

export default Block