import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import newsItemReducer from "./newsItemReducer";


const rootReducer = combineReducers({
  newsReducer,
  newsItemReducer
});

export default rootReducer;
