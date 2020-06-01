import React, { useState } from 'react';


const Search = ({submitHandler, changeHandler})=>{
    const [data, setData] = useState();


    return(
        <form id="demo-2" onSubmit={submitHandler} style={{position: "absolute"}}>
            <input className="search" onChange={changeHandler} type="search" placeholder="search" />
        </form>
    )
}


export default Search