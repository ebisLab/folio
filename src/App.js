import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Post from './components/Post'
import {mock} from './mock'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])


  useEffect((e) => {
    setData(mock)
}, [])

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
          
          {/* <Route path="/projects/" render={props=><Projects/>}/>
          <Route path="/post/:postID" render={props=><Post {...props}/>}/> */}

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
            <Home data={data}/>
          </Route>
        </Switch>
    </Route>
  );
}

export default App;
