import React from "react";
import{Route, Link} from 'react-router-dom';


const Block = ({info}) =>{
    return(
        <a className="column v2" 
        style={{backgroundImage: `url(${info.imgUrl})`}} 
        href={`/post/${info.id}`}>
<div className="v3">
        <div data-tab="illustrations"  >
            <div className="variant">
                
        <div className="middle">
    <div className="text">
        
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