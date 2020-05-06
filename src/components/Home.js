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

    console.log('data', data)
    useEffect((e) => {
    
        setData(mock)
        // setData(mock.filter(name=>name.category.includes('')))

    }, [])


    const filterthrough = (e)=>{
        e.preventDefault()
        // console.log('i just clicked this--->', e.target.dataset.tab)
        // console.log(document.querySelector('[data-tab=illustrations]'))
        setData(data.filter(name=>name.category.includes(`${e.target.dataset.tab}` || '')))
    }

    return(
        <div>
             <h1>
            This is the home
        </h1>
            <nav>
                <ul>
                    <li data-tab="illustrations" className="something" onClick={filterthrough}>Illustrations</li>
                    <li data-tab="app" onClick={(e)=>(setData(data.filter(name=>name.category.includes(e.target.dataset.tab))))}>Graphs</li>
                    <li onClick={filterthrough}>FullStack</li>
                    <li data-tab="ux"onClick={filterthrough}>UI</li>


                </ul>

                {console.log(data && data.map(item=>item.category))}
            </nav>

            <div className="row">
                {data && data.map(item=> <Block info={item} />)}
            </div>
       
        </div>
    )
}

export default Home