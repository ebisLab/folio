import React, { useState, useEffect } from "react";
import { mock } from '../mock'


const SearchResults = ({query}) => {
  const [dataHere, setDataHere]=useState([])
  const [hello, setHello]=useState([])

    //search through
      //blog article
      //project showcase



  useEffect(() => {
    setDataHere(mock)
    const searchthrough=dataHere.filter(item=>item.text.toLowerCase().includes(query.toLowerCase()))
    // setHello(searchthrough)
    setTimeout(() => {
      setHello(searchthrough)

      return 

    }, 2000);

  }, [dataHere, query])
  console.log(dataHere, 'setdata here')
  console.log(query, 'query')



  return (
    <div>
      <h2 style={{ color: "green" }}>You are searching "{query}"</h2>
      <div
              style={{display: "inline-flex"}}
 
      >

        {hello.map((item,i)=>(
          <div key={i} 
          style={{border: "1px solid grey", margin: "20px", width: "300px", borderRadius: "10px"}}>
        <div 
        // style={{display: "inline-flex"}}
        >{item.title}</div>
        <img style={{width: "100%"}} src={item.imgUrl} alt={item.title}/>
        <div 
        className="searchwrap" id="inputText"
        >
          {item.text}
          {/* <span id="searchtext">{item.text}</span> */}
        </div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default SearchResults