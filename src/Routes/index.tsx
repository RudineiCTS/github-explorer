import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';


const Routes:React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository" component={Repository}/>
    </Switch>
  )
}

export default Routes;
