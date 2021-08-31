import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {comments, stories, story} from "../features/items/reducers";

const rootReducer = combineReducers({
  stories: stories,
  story: story,
  comments: comments
});


const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
