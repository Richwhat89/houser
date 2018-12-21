import React from 'react';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import House from './components/House';
import Wizard from './components/Wizard';

import {Switch, Route} from 'react-router-dom';

export default(
    <Switch>
        <Route component={Dashboard} exact path='/'/>
        <Route component={Header} exact path='/header'/>
        <Route component={House} exact path='/house'/>
        <Route component={Wizard} exact path='/wizard'/>
    </Switch>
)