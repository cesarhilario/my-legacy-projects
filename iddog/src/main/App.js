import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Feed from '../pages/Feed/Feed';
import history from '../main/history';

export const App = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={ Login }/>
            <Route path='/feed' component={ Feed }/>
        </Switch>
    </Router>
);

