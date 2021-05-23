import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import { Start } from '../pages/start/Start';

export const Routing = () => (
  <Switch>
    <Route render={props => <Start {...props}/>} exact path='/' />
    <Route render={props => <Start {...props}/>} exact path='/start'/>
  </Switch>
)