import { combineReducers } from "redux";
import newsReducer from "./news";
import newsItemReducer from "./news-item";

const rootReducer = combineReducers({
  newsReducer,
  newsItemReducer
});

export default rootReducer;
