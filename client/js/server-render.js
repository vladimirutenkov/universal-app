import React from 'react';
import ReactDom from 'react-dom/server';
import { createMemoryHistory, match } from 'react-router';
import configureStore from './store';
import { ServerRoot } from './containers/Root';
import routes from './routes';

const getFullPage = (html, initialState) => `
<!doctype html>
<html>
  <head>
    <title>Universal App</title>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
`;

const db = {
    counter: 42,
    items: [
        { id: 1, caption: 'Item 1' },
        { id: 2, caption: 'Item 2' },
        { id: 3, caption: 'Item 3' },
        { id: 4, caption: 'Item 4' },
        { id: 5, caption: 'Item 5' },
        { id: 6, caption: 'Item 6' },
        { id: 7, caption: 'Item 7' },
        { id: 8, caption: 'Item 8' },
        { id: 9, caption: 'Item 9' },
    ],
};

export default function render(url, state = db) {
    const history = createMemoryHistory(url);
    const store = configureStore(history, state);

    return new Promise(resolve => {
        match({ routes, location: url }, (error, redirectLocation, renderProps) => {
            const html = ReactDom.renderToString(
                <ServerRoot store={store} renderProps={renderProps}/>
            );

            resolve(
                getFullPage(html, store.getState())
            );
        });
    });
}
