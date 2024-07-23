import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
// import { fetchDataMiddleware } from "./middlewares/fetchDataMiddleware";
import { postReducer } from "./reducers/postReducer";
// import { asyncMiddleware } from "./core/asyncMiddleware";
// import { loggerMiddleware } from "./middlewares/loggerMiddleware";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
  posts: postReducer,
});
const middlewares = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

//feature/action
