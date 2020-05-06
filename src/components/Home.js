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

    return(
        <div>
             <h1>
            This is the home
        </h1>
            <nav>
                <ul>
                <li onClick={() => setQuery(null)}>All</li>
                    <li data-tab="illustrations" className="something" onClick={filterthrough}>Illustrations</li>
                    <li data-tab="app" onClick={filterthrough}>App</li>
                    <li onClick={filterthrough}>FullStack</li>
                    <li data-tab="ux"onClick={filterthrough}>UI</li>


                </ul>

            </nav>

            <div className="row">
                {query ?(query.map(item=> <Block info={item} />)): (data.map(item=> <Block info={item} />))}
            </div>
       
        </div>
    )
}

export default Home