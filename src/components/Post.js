import React from "react";
import { useParams} from "react-router-dom";
import '../App_post.css';
import styled from 'styled-components'


const Projects = ({data}) =>{

    const params = useParams();
        const info = data.find(item => item.id === Number(params.data));
        console.log(info,'info')

const Intro = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  &:before {
    position: absolute;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    top: -50;
    display: block;
    background-image: url(${info && info.imgUrl});
    background-size: cover;
    transform-origin: center center 0;
    transform:  translateZ(-1px) scale(2);
    z-index: -1;
    height: 110vh
}
`;

    return(
        <>
        {info && (  
            
            <div>
<Intro className="intro"></Intro>

<div></div>

<div style={{background: "white"}}>
<div className="content" style={{ background: "white"}}>
    <div style={{display: "inline-flex", padding: "0 100px"}}>
    <section style={{padding:"20px", width: "100%"}}><h2>{info.title}</h2></section>
    
    <section style={{padding:"20px"}}><p>{info.text}</p>
    <p>{info.socials&& `Github:  ${info.socials.github}`}</p>
    </section>
    </div>

    </div>



    <div className="content" style={{ background: "white", display: "inline-grid", padding:0, gridTemplateColumns: 'repeat(2, 1fr)',}}>      
            {info.imgs && info.imgs.map(im=>(
            <div 
            style={{
                width: "50%", 
                    backgroundImage: `url(${im})`,width:"100%", height: "30vw", backgroundSize: 'cover'            }}
            ></div>
           ))}      
    </div>

    <div className="content" style={{ background: "white"}}>
        <div style={{display: "inline-flex", padding: "0 100px"}}>
            <section style={{padding:"20px", width: "100%"}}><h2>{info.title}</h2></section>
             <section style={{padding:"20px"}}>
                 <p>{info.text}</p>
                 </section>
        </div>
    </div>

    <div className="content cellSection">      
            {info.imgs && info.imgs.map(im=>(
            <div 
            className="cells"
            style={{
                background: "red",
                width: "50%", 
                    backgroundImage: `url(${im})`,width:"100%", height: "30vw", backgroundSize: 'cover'}}
            ></div>
            
           ))}      
    </div>




<div style={{background: "yellow"}}><h2>{info.text}</h2></div>
<div style={{background: "dodgerblue"}}><h2>{info.text}</h2></div>
</div>

</div>
        
        
        )}
        </>)
    
}

export default Projects