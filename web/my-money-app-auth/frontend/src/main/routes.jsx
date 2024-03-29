import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp';
import Dashboard from '../dashboard/dashboard';
// import Dashboard from '../dashboard2/dashboard2';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/billingCycle' component={BillingCycle}/>
            <Redirect from='*' to='/'/>
        </Switch>
    </div>
);