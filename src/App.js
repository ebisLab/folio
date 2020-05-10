import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

<Route>
  <nav>
  <ul>
  <li>
  <Link to="/">Home</Link>
  </li>
  <li>
  <Link to="/projects">Projects</Link>
  </li>
  <li>
  <Link to="/about">About</Link>
  </li>
  <li>Blog</li>
  </ul>
  </nav>

          <Switch>   
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gross">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Route>
  );
}

export default App;
