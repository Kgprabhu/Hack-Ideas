import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import { Start } from '../pages/start/Start';
import { Challenge } from '../pages/challenge/Challenge';

export const Routing = () => (
  <Switch>
    <Route render={props => <Start {...props}/>} exact path='/' />
    <Route render={props => <Start {...props}/>} exact path='/start' />
    <Route render={props => <Challenge {...props} path='/challenges' />}/>
  </Switch>
)