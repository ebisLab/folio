import React, { useState } from "react";
  import Block from './Block'

const Home = ({data}) =>{
    const [query, setQuery] = useState('')


    const filterthrough = (e)=>{
        e.preventDefault()
        setQuery(data.filter(name=>name.category.includes(`${e.target.dataset.tab}`)))
    }

    const a= data.map(item=>item.category)
    //remove duplicates
    const b = a.filter((item, index, self) => self.indexOf(item) === index) 


    return(
        <div>
            <nav id="navigation">
                {/* <ul>
                <li onClick={() => setQuery(null)}>All</li>
                    <li data-tab="illustrations" className="something" onClick={filterthrough}>Illustrations</li>
                    <li data-tab="app" onClick={filterthrough}>App</li>
                    <li onClick={filterthrough}>FullStack</li>
                    <li data-tab="ux"onClick={filterthrough}>UI</li>
                </ul> */}

                <ul id="a113">
                <li onClick={() => setQuery(null)}>All</li>
                {b.map((item, key)=><li data-tab={`${item}`} key={key} onClick={filterthrough}>{item}</li>)}

                </ul>

                

            </nav>

            <div className="row">
                {query ?(query.map((item,key)=> <Block key={key} info={item} />)): 
                (data.map((item, key)=> <Block key={key} info={item} />))}
            </div>
       
        </div>
    )
}

export default Home