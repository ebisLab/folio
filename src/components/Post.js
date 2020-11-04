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

    function isFileImage(file) {
        console.log("FILE-->", file)
        const acceptedImageTypes = ['jpg','gif', 'jpeg', 'png'];
     
        return file && acceptedImageTypes.includes(file['type'])
    }


    function checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    const arr=["https://i.imgur.com/Dpm9khf.jpg", "https://i.imgur.com/Dpm9khf.png", "https://i.imgur.com/Dpm9khf.gif","https://i.imgur.com/Dpm9khf.mp4" ]
    console.log("IS THIS AN IMG", arr.map(item=>checkURL(item)))

    console.log("IS THIS AN IMAGE?", isFileImage("jpg"))
    

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
    top: -185px;
    display: block;
    background-image: url(${info && info.imgUrl});
    background-size: cover;
    transform-origin: center center 0;
    transform:  translateZ(-1px) scale(2);
    z-index: -1;
    height: 102vh
}
`;

    return (
        <>
        {console.log("INFO IMG", info )}
            {info && (
                

                <div>
                    {/* {const imgPoster = info.imgs[3])} */}
                    <Intro className="intro">
                        <h1 onClick={()=>{
                            var my_element = document.getElementById("my_element");

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});}} 
// className="floating" 
style={{ marginTop: 50, fontSize: "6rem", cursor:"pointer", width: "100px", marginLeft: "auto", marginRight: "auto"  }}>↓</h1>
                    </Intro>

                    <div></div>

                    <div id="my_element" style={{ background: "white"}}>
                        <div className="content" style={{ background: "white" }}>
                            <div style={{ display: "inline-flex", padding: "0 100px" }}>
                                <section style={{ padding: "20px", width: "100%" }}>
                                    <h2>{info.title}</h2>
                                    {/* <h4>{info.role}</h4> */}
                                    <p>Tech stack: {info.techstack}</p>

<div>{info.text2 ? (<><h3>Key Work: </h3> <p>{info.text2}</p></>) : ""}</div>
                                </section>

                                <section style={{ padding: "20px", alignSelf: "center" }}><p>{info.text}</p>
                                    {/* <p>Tech stacks: {info.techstack}</p> */}

                                    {/* <p>{info.socials && `Github:  ${info.socials.github}`}</p> */}
                                    {info.socials && (
                                        <div className="post-link">
                                            <a  href={`${info.socials.github}`}>Github</a> • <a href={`${info.socials.website}`}>Website</a> {info.mock
                                            && <> • <a href={`${info.mock}`}> Prototype</a></>

                                            }
                                        </div>
                                    )}

                                </section>
                            </div>
                        </div>


                {info.imgs.length === 1 ? <div className="content cellSection" style={{ gridTemplateColumns: "auto" }}>
                    {info.imgs && info.imgs.map(im => (
                        <div key={im}
                            className="cells"
                            style={{
                                width: "50%",
                                backgroundImage: `url(${im})`, width: "100%", height: "30vw", backgroundSize: 'cover'
                            }}
                        >
                        </div>

                    ))}
                </div> :

                    (
                    
                                            <div className="content cellSection">
                        {info.imgs && info.imgs.map(im => (
                            // console.log("THIS IMAGE IS VALID", checkURL(im))
                            checkURL(im)==false? (
                                <video 
                                frameborder="0"
       autoplay="autoplay"
       width="600px"
       muted
       loop
                                // poster={info.imgs[3]}
                                  style={{width: "100%", height:"auto", backgroundColor:"black"}}> 
  <source src={`${im}`} type="video/mp4"/> 
  {console.log("IMMMG", im)}
</video>

                                // <iframe src={im} width="1200px" height="600vh" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            //    <video style={{width:"50%"}} src={im} controls></video>
                            // im
                            ): (
                            <div
                                className="cells"
                                style={{
                                    width: "50%",
                                    backgroundImage: `url(${im})`, backgroundColor:"black", width: "100%", height: "30vw", backgroundSize: 'cover'
                                }}
                            ></div>
                            )

                        ))}
                    </div>

                    // <div className="content cellSection">
                    //     {info.imgs && info.imgs.map(im => (
                    //         <div
                    //             className="cells"
                    //             style={{
                    //                 width: "50%",
                    //                 backgroundImage: `url(${im})`, backgroundColor:"black", width: "100%", height: "30vw", backgroundSize: 'cover'
                    //             }}
                    //         ></div>

                    //     ))}
                    // </div>
                    
                    
                    )}



                        {/* <div style={{ background: "yellow" }}><h2>{info.text}</h2></div>
                        <div style={{ background: "dodgerblue" }}><h2>{info.text}</h2></div> */}
                    </div>

                </div>


            )}
        </>)

}

export default Projects
