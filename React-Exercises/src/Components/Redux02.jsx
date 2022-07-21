// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { counterReducer} from "./Redux01";
import { usersReducer } from "./Redux03";

// export const store = configureStore(counterReducer)
export const store = createStore(counterReducer)

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
})

export const store2 = createStore(rootReducer)

/*
Create a store that uses CounterReducer as its root reducer, 
and dispatch an INCREMENT action on the store. Verify that the state updates as expected.
*/