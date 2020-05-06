import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Block from './Block'
  import {mock} from '../mock'

const Home = () =>{
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    useEffect((e) => {
        setData(mock)
    }, [])


    const filterthrough = (e)=>{
        e.preventDefault()
        setQuery(data.filter(name=>name.category.includes(`${e.target.dataset.tab}`)))
    }

    const a= data.map(item=>item.category)
    //remove duplicates
    const b = a.filter((item, index, self) => self.indexOf(item) === index) 

    return(
        <div>
             <h1>
            This is the home
        </h1>
            <nav>
                {/* <ul>
                <li onClick={() => setQuery(null)}>All</li>
                    <li data-tab="illustrations" className="something" onClick={filterthrough}>Illustrations</li>
                    <li data-tab="app" onClick={filterthrough}>App</li>
                    <li onClick={filterthrough}>FullStack</li>
                    <li data-tab="ux"onClick={filterthrough}>UI</li>
                </ul> */}

                <ul>
                <li onClick={() => setQuery(null)}>All</li>
                {b.map((item, key)=><li data-tab={`${item}`} key={key} onClick={filterthrough}>{item}</li>)}

                </ul>

                

            </nav>

            <div className="row">
                {query ?(query.map((item,key)=> <Block key={key} info={item} />)): (data.map((item, key)=> <Block key={key} info={item} />))}
            </div>
       
        </div>
    )
}

export default Home