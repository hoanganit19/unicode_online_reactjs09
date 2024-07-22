import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoListReducer } from "./reducers/todoListReducer";
import { fetchDataMiddleware } from "./middlewares/fetchDataMiddleware";
import { postReducer } from "./reducers/postReducer";
// import { loggerMiddleware } from "./middlewares/loggerMiddleware";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoListReducer,
  posts: postReducer,
});
const middlewares = [fetchDataMiddleware];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

//feature/action
