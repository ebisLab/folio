import React, { useState, useEffect } from "react";
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Post from './components/Post'
import Blog from './components/Blog'
import { mock } from './mock'
// import Search from './components/Search'
import SearchResults from './components/SearchResults'
// import {highlight} from './utils/highlight'
import {CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [query, 
    // setQuery
  ] = useState('')


  useEffect(() => {
    setData(mock)
  }, [])
  // const changeHandler = e => {
  //   e.preventDefault();
  //   setQuery(e.target.value);
  //   highlight(query)
  //     };

  // const submitHandler = e => {
  //   e.preventDefault();
  //   setQuery(e.target.value);
  // };



  return (

    <Route>
      <div>
      <h1 className="outlined"
      style={{fontFamily: 'Darker Grotesque, sans-serif', marginBottom: "15px"}}
      ><Link to="/home">Eunice Baiden</Link></h1>
      <nav style={{paddingTop: 0}}>
        <ul className="outlined" style={{ paddingLeft: 0, fontFamily: 'Sulphur Point, sans-serif'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      </div>

      {/* <Route render={({location})=>( */}
        {/* // <TransitionGroup> */}
        {/* <CSSTransition
        key={location.key}
        timeout={450}
        classNames="fade"
        > */}
              <Switch 
              // location={location}
              >
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
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/">
        
                  <div >
                    <div style={{ display: 'inline-flex', textAlign: 'center', 
                    // margin: "0 calc(45% - 100px)", 
                    margin: '20px'

                   }}>
         
                      <div>
                      <a href="https://www.linkedin.com/in/eunice-baiden/"><li><i className="fa fa-linkedin-square" style={{fontSize:"20px", color: "gray"}}></i></li></a>
                      <a href="https://github.com/ebisLab" ><li><i className="fa fa-github" style={{fontSize:"24px", color: "gray"}}></i></li></a>
                          
                      <a href="mailto:ebaiden@techie.com" style={{margin: "20px",padding: "20px"}}><i className="fa fa-envelope-o" style={{fontSize:"20px", color: "gray"}}></i></a>
                        {/* <ul>
                          <li>LinkedIn</li>
                          <li>Github</li>
                          <li>Email</li>

        
        
                        </ul> */}
                      </div>
        
                    </div>
        
                    {query ? <SearchResults query={query} data={data}/> : <Home data={data} />}
                  </div>
                </Route>
              </Switch>
              {/* </CSSTransition>   */}
        
              {/* </TransitionGroup> */}
        

      {/* )}/> */}
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
