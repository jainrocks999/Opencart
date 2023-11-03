import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import saga from "./saga";
import Slice from './slice'
const runSaga=createSagaMiddleware();
const store=configureStore({
    reducer:{
        data:Slice
    },
    middleware:[runSaga]
})
runSaga.run(saga);
export default store;