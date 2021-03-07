import React from 'react';
import ReactDOM from 'react-dom';
import Retrospective from './Retrospective/Retrospective';
import Weather from './Weather/Weather';
import Home from "./Home/Home";
import ToDo from "./Todos/Todos";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <div className="links">
      <Link to ="/">Home</Link>
      <Link to ="/weather">Weather</Link>
      <Link to ="/retrospective">Retrospective</Link>
      <Link to ="/to_do_list">To do list</Link>
    </div>
    <hr />
    <Switch>
        <Route path ="/weather">
            <Weather />
        </Route>
        <Route path ="/retrospective">
            <Retrospective />
        </Route>
        <Route path ="/to_do_list">
            <ToDo />
        </Route>
        <Route path ="/">
            <Home />
        </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
