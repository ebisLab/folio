import React from "react";
import { useParams, useRouteMatch} from "react-router-dom";


const Projects = ({data}) =>{

    const params = useParams();
        const info = data.find(item => item.id === Number(params.data));
        console.log(info,'info')
    return(
        <>
        {info && (<div>
        <h1>
            This is the projects
        </h1>
        <section style={{display: 'inline-flex'}}>
        <div 
        style={{width: "200px", height:"200px", 
        backgroundImage: `url(${info.imgUrl})`, backgroundSize: '100%'
    }}
        ></div>
        <div>This is something about this compoennt</div>
        <h3>{info.title}</h3>
        
        </section>
        </div>)}
        </>)
    
}

export default Projects