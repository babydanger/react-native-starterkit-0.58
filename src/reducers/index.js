import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import networkReducer from './networkReducer';
import loginReducer from './loginReducer';

const reducers = combineReducers({
    languageReducer,
    networkReducer,
    loginReducer,
});

export default reducers;
