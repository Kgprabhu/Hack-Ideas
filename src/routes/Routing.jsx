import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import { StartView } from '../pages/start/Start';
import { ChallengeView } from '../pages/challenge/Challenge';

export const Routing = () => (
  <Switch>
    <Route render={props => <StartView {...props}/>} exact path='/' />
    <Route render={props => <StartView {...props}/>} exact path='/start' />
    <Route render={props => <ChallengeView {...props} path='/challenges' />}/>
  </Switch>
)