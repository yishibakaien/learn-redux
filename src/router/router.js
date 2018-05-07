import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home/Home.js';
import List from '../pages/List/List.js';
import Detail from '../pages/Detail/Detail.js';
import NotFound from '../pages/NotFound/NotFound.js';

export default class RouteMap extends React.Component { 
  render() {
    return ( 
      <div className="router-container">
        <Router> 
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/home"component={ Home } />
            <Route path="/list" component={ List } />
            <Route path="/detail/:id" component={ Detail } />
            <Route path="/" exact component={ Home } />
            <Route path="*" component={ NotFound } />    
          </Switch>
        </Router>
      </div>
    )
  } 
}
