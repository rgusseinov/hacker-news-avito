import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {news} from "../features/news/reducers";
import { newsItems } from "../features/newsItem/reducers";
import { commentIds } from "../features/comment/reducers";
import { commentsContent } from "../features/comment-content/reducers";

const rootReducer = combineReducers({
  news,
  newsItems,
  commentIds,
  commentsContent,
});

const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
