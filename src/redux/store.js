import createSagaMiddleware from '@redux-saga/core';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers/coins.reducer';
import coinSaga from './sagas/getCoinSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(coinSaga);
export default store;