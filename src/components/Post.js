import React from "react";
import { useParams } from "react-router-dom";
import '../App_post.css';
import styled from 'styled-components'


const Projects = ({ data }) => {

    const params = useParams();
    console.log(data, 'data in projects')
    const info = data.find(item => item.id === Number(params.data));
    console.log(params, 'params')
    console.log(info, 'info')

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

    return (
        <>
            {info && (

                <div>
                    <Intro className="intro">
                        <h1 onClick={()=>{
                            var my_element = document.getElementById("my_element");

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});}} className="floating" style={{ marginTop: 50, fontSize: "6rem", cursor:"pointer", width: "100px", marginLeft: "auto", marginRight: "auto"  }}>↓</h1>
                    </Intro>

                    <div></div>

                    <div id="my_element" style={{ background: "white"}}>
                        <div className="content" style={{ background: "white" }}>
                            <div style={{ display: "inline-flex", padding: "0 100px" }}>
                                <section style={{ padding: "20px", width: "100%" }}>
                                    <h2>{info.title}</h2>
                                    {/* <h4>{info.role}</h4> */}
                                    <p>Tech stacks: {info.techstack}</p>

                                    <p>{info.text2}</p>
                                </section>

                                <section style={{ padding: "20px", alignSelf: "center" }}><p>{info.text}</p>
                                    {/* <p>Tech stacks: {info.techstack}</p> */}

                                    {/* <p>{info.socials && `Github:  ${info.socials.github}`}</p> */}
                                    {info.socials && (
                                        <div>
                                            <a href={`${info.socials.github}`}>Github</a> • <a href={`${info.socials.website}`}>Website</a>
                                        </div>
                                    )}

                                </section>
                            </div>
                        </div>




                        {/* <div className="content" style={{ background: "white", display: "inline-grid", padding: 0, gridTemplateColumns: 'repeat(2, 1fr)', }}>
                            {info.imgs && info.imgs.map(im => (
                                <div
                                    style={{
                                        width: "50%",
                                        backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="content" style={{ background: "white" }}>
                            <div style={{ display: "inline-flex", padding: "0 100px" }}>
                                <section style={{ padding: "20px", width: "100%" }}><h2>{info.title}</h2></section>
                                <section style={{ padding: "20px" }}>
                                    <p>{info.text}</p>
                                </section>
                            </div>
                        </div> */}

                        {/* <div className="content cellSection">
                            {info.imgs && info.imgs.map(im => (
                                <div
                                    className="cells"
                                    style={{
                                        background: "red",
                                        width: "50%",
                                        backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                    }}
                                ></div>

                            ))}
                        </div> */}


                {info.imgs.length == 1 ? <div className="content cellSection" style={{ gridTemplateColumns: "auto" }}>
                    {info.imgs && info.imgs.map(im => (
                        <div
                            className="cells"
                            style={{
                                background: "red",
                                width: "50%",
                                backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                            }}
                        ></div>

                    ))}
                </div> :

                    (<div className="content cellSection">
                        {info.imgs && info.imgs.map(im => (
                            <div
                                className="cells"
                                style={{
                                    background: "red",
                                    width: "50%",
                                    backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                }}
                            ></div>

                        ))}
                    </div>)}



                        {/* {                                   info.imgs.length==1 ?             <div className="content cellSection" style={{gridTemplateColumns: "auto"}}>
                            {info.imgs && info.imgs.map(im => (
                                <div
                                    className="cells"
                                    style={{
                                        background: "red",
                                        width: "50%",
                                        backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                    }}
                                ></div>

                            ))}
                        </div> : info.imgs.length == 0 ? '':
                        
                        (                                                <div className="content cellSection">
                        {info.imgs && info.imgs.map(im => (
                            <div
                                className="cells"
                                style={{
                                    background: "red",
                                    width: "50%",
                                    backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                                }}
                            ></div>

                        ))}
                    </div>)} */}





                        {/* <div style={{ background: "yellow" }}><h2>{info.text}</h2></div>
                        <div style={{ background: "dodgerblue" }}><h2>{info.text}</h2></div> */}
                    </div>

                </div>


            )}
        </>)

}

export default Projects
