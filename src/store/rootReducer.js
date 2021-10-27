import { combineReducers } from "redux";
import commentsReducer from "./commentReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  itemReducer,
  commentsReducer
});

export default rootReducer;

