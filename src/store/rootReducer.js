import { combineReducers } from "redux";
/* import commentsReducer from "./commentReducer"; */
import newsItemReducer from "./newsItemReducer";
import newsReducer from "./newsReducer";


const rootReducer = combineReducers({
  newsReducer,
  newsItemReducer
});

export default rootReducer;

