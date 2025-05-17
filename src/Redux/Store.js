import { applyMiddleware, createStore } from "redux";
import combineReducers from "./Reducers/CombineReducer";
import { thunk } from "redux-thunk";

const myStore = createStore(combineReducers, applyMiddleware(thunk));

export default myStore;