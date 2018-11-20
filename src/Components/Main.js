import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Cheatsheet from './Cheatsheet.js';
import Libraries from './Libraries.js';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Cheatsheet' component={Cheatsheet} />
      <Route path='/Libraries' component={Libraries} />
    </Switch>
  )
}
export default Main;
