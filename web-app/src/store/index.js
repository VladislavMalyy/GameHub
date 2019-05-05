import { createStore, combineReducers } from 'redux';
import testReducer from './testReducer'; 


/**
 * You can add new reducers to combineReducers
 */
const reducer = combineReducers({
    test: testReducer
});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())