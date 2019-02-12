import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/index";
import watcherSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(watcherSaga);

export default store;
