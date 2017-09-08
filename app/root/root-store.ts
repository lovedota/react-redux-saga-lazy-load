import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import RootReducer from "../root/root-reducer";
import RootSaga from "../root/root-saga";

export const sagaMiddleware = createSagaMiddleware();

export const runSagas = (pageSaga?) => {
    const sagas = [RootSaga];

    if (pageSaga) {
        sagas.push(pageSaga);
    }

    sagaMiddleware.run(function*() {
        yield sagas.map((saga) => fork(saga));
    });
};

export const createReducers = (pageReducer?) => {
    const reducers = {
        root: RootReducer
    };

    if (pageReducer) {
        reducers["page"] = pageReducer;
    }

    return combineReducers(reducers);
};

const store = createStore(
    createReducers(), applyMiddleware(sagaMiddleware)
);

export const applyReducers = (pageReducer) => {
    store.replaceReducer(createReducers(pageReducer));
};

runSagas(RootSaga);

export const dispatch = store.dispatch;

export default store;
