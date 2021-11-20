import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import newsItemReducer from "./newsItemReducer";
import newsItemCommentReducer from "./newsItemCommentReducer";


const rootReducer = combineReducers({
  newsReducer,
  newsItemReducer,
  newsItemCommentReducer
});

export default rootReducer;
