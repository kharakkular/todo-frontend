import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import todoReducer from "./reducers/todoReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(todoReducer, initialState, applyMiddleware(thunk));

export default store;
