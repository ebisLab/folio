import React from "react";

const Block = ({info}) =>{
    return(
        <a className="column v2" 
        style={{backgroundImage: `url(${info.imgUrl})`}} 
        href="/gross">
<div className="v3">
        <div data-tab="illustrations"  >
            <div className="variant">
                
        <div class="middle">
    <div class="text">
        
    <h2>{info.category}</h2>
                <h1>{info.title}</h1>
    </div>
  </div>
                

                </div>
            </div>
            </div>
            </a>

    )
}

export default Block