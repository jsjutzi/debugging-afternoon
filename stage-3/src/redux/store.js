import reducer from "./reducer";
import reduxPromiseMiddleware from "redux-promise-middleware";
import { createStore } from "redux";
import { applyMiddleware } from "redux";

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
