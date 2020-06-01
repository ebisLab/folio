import React, { useState, useEffect } from "react";
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Post from './components/Post'
import {mock} from './mock'
import Search from './components/Search'
import SearchResults from './components/SearchResults'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')


  useEffect((e) => {
    setData(mock)
}, [])

const changeHandler = e => {
  e.preventDefault();
  setQuery(e.target.value);
  console.log(e.target.value);
};

const submitHandler = e => {
  e.preventDefault();
  setQuery(e.target.value);
};
console.log(data);

  return (

<Route>
  <nav>
  <ul>
  <li>
  <Link to="/">Home</Link>
  </li>
  <li>
  <Link to="/post">Projects</Link>
  </li>
  <li>
  <Link to="/about">About</Link>
  </li>
  <li>Blog</li>
  </ul>
  </nav>

          <Switch>   
          <Route path="/post/:data">
            <Post key={data.id} data={data} />
            </Route>

            <Route path="/post/">
            <Projects data={data} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gross">
            <About />
          </Route>
          <Route path="/">

            <div >

<div style={{display: 'inline-flex', textAlign: 'center', margin: "0 calc(45% - 100px)"}}>
            <Search changeHandler={changeHandler} submitHandler={submitHandler} />
               
               <div>
                   <ul>
                       <li>LinkedIn</li>
                       <li>Github</li>
                       <li>Email</li>
       
                       
                   </ul>
                            </div>

</div>
            {/* <Home data={data}/> */}
            {console.log("iniside App below home")}
            {query? <SearchResults />: <Home data={data}/>}
            </div>
          </Route>
        </Switch>
    </Route>
  );
}

export default App;
