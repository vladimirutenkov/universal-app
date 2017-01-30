import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store';

const store = configureStore(browserHistory, window.__INITIAL_STATE__);

ReactDOM.render(
    <Root store={store} history={browserHistory}/>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const Root = require('./containers/Root').default;
        ReactDOM.render(
            <Root store={store} history={browserHistory}/>,
            document.getElementById('root')
        );
    });
}
