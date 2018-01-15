import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

import rootReducer from '../root/root-reducer';
import rootSaga from '../root/root-saga';
import { moduleName } from 'app/modules/about';

export const sagaMiddleware = createSagaMiddleware();

const injectedReducers = {}; // Reducer registry
const injectedSagas = {}; // Saga registry

export const runSagas = (moduleName, saga) => {
    if (!injectedSagas[moduleName]) {
        injectedSagas[moduleName] = saga;
    }

    const sagas = Object.keys(injectedSagas).map((key) => injectedSagas[key]);

    sagaMiddleware.run(function*() {
        yield sagas.map((s) => fork(s));
    });
};

export const createReducers = (moduleName, reducer) => {
    if (!injectedReducers[moduleName]) {
        injectedReducers[moduleName] = reducer;
    }

    return combineReducers(injectedReducers);
};

let store = createStore(
    createReducers('root', rootReducer), applyMiddleware(sagaMiddleware)
);

// tslint:disable-next-line:no-shadowed-variable
export const injectAsyncReducer = (moduleName, reducer) => {
    store.replaceReducer(createReducers(moduleName, reducer));
};

runSagas('root', rootSaga);

export const dispatch = store.dispatch;

export default store;
