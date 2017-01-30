import React from 'react';
import { Router, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';

export const ServerRoot = props => (
    <Provider store={props.store}>
        <RouterContext {...props.renderProps}/>
    </Provider>
);

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <Router history={props.history} routes={routes}/>
        </Provider>
    );
}
