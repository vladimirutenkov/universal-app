import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Layout, Home, Counter, About } from './containers';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="counter" component={Counter}/>
        <Route path="about" component={About}/>
    </Route>
);
