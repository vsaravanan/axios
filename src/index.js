import React from 'react';
import ReactDOM from 'react-dom';
//import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom';

const About = () => (
  <h1>About.....</h1>
);

const Topics = () => (
  <h1>Topics.....</h1>
);

const MyComponent= () => (
    <BrowserRouter>
    <div>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/topics">Topics</Link></li>
    </ul>
    <Route exact path="/" render={ ( ) => (<h2> HomePage </h2>) } />
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
    </div>
    </BrowserRouter>
);


ReactDOM.render(
   <MyComponent/>, document.getElementById('root')
);