import { combineReducers } from "redux";
import commentsReducer from "./commentReducer";
import itemReducer from "./itemReducer";
import itemsReducer from "./itemsReducer";


const rootReducer = combineReducers({
  itemsReducer,
  itemReducer,
  commentsReducer
});

export default rootReducer;

