import React from "react";
import{Link} from 'react-router-dom';


const Block = ({info}) =>{
    return(
        <Link className="column v2" 
        style={{backgroundImage: `url(${info.imgUrl})`}} 
        to={`/post/${info.id}`}>
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
            </Link>

    )
}

export default Block