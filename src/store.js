import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer
});

const middlewares = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middlewares);

export default store;
