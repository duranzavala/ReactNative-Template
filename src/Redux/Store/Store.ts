import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducers, rootEpic } from '@Redux/Store/Root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (window && (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const configureStore = () => {
    const store = createStore(reducers, composeEnhancers(applyMiddleware(epicMiddleware)));
    epicMiddleware.run(rootEpic);

    return store;
};

export type RootStore = ReturnType<typeof reducers>;

export default configureStore;
