import React, { useState, useEffect } from "react";
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Post from './components/Post'
import { mock } from './mock'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import {highlight} from './utils/highlight'
import {CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')


  useEffect(() => {
    setData(mock)
  }, [])
  const changeHandler = e => {
    e.preventDefault();
    setQuery(e.target.value);
    highlight(query)
      };

  const submitHandler = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };



  return (

    <Route>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>Blog</li>
        </ul>
      </nav>

      <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={450}
        classNames="fade">
              <Switch location={location}>
                <Route path="/post/:data">
                  <Post data={data} />
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
        
                    <div style={{ display: 'inline-flex', textAlign: 'center', margin: "0 calc(45% - 100px)" }}>
                      <Search changeHandler={changeHandler} submitHandler={submitHandler} />
        
                      <div>
                        <ul>
                          <li>LinkedIn</li>
                          <li>Github</li>
                          <li>Email</li>
        
        
                        </ul>
                      </div>
        
                    </div>
        
                    {query ? <SearchResults query={query} data={data}/> : <Home data={data} />}
                  </div>
                </Route>
              </Switch>
              </CSSTransition>  
        
              </TransitionGroup>
        

      )}/>
{/* <TransitionGroup>
<CSSTransition
timeout={300}
classNames="fade">
      <Switch>
        <Route path="/post/:data">
          <Post data={data} />
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

            <div style={{ display: 'inline-flex', textAlign: 'center', margin: "0 calc(45% - 100px)" }}>
              <Search changeHandler={changeHandler} submitHandler={submitHandler} />

              <div>
                <ul>
                  <li>LinkedIn</li>
                  <li>Github</li>
                  <li>Email</li>


                </ul>
              </div>

            </div>

            {query ? <SearchResults query={query} data={data}/> : <Home data={data} />}
          </div>
        </Route>
      </Switch>
      </CSSTransition>  

      </TransitionGroup> */}


    </Route>
  );
}

export default App;
