import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import rootSagas from '../services/sagas/rootSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(reducers, applyMiddleware(thunk, createLogger, sagaMiddleware));

// run saga
sagaMiddleware.run(rootSagas);

// export
export default store;
