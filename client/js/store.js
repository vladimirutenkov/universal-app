import { createStore } from 'redux';
import root from './reducers';

export default function(history, initialState) {
    const store = createStore(root, initialState);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRoot = require('./reducers').default;
            store.replaceReducer(nextRoot);
        });
    }

    return store;
}
