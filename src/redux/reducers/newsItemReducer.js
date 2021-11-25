import { LOAD_COMMENT_SUCCESS, LOAD_NEWS_ITEM_SUCCESS } from "../actions/actionTypes";

const initialState = {
  newsItems: {},
  comments: {}
};

const newsItemReducer = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_ITEM_SUCCESS) {
    return {
      newsItems:{
        ...state.newsItems,
        [action.payload.id]: {
          item: action.payload, isLoaded: true
        },
      },
    };
  }

  if (action.type === LOAD_COMMENT_SUCCESS) {
    return {
      comments:{
        ...state.comments,
        [action.payload.id]: {
          item: action.payload.item,
          isLoaded: true
        },
      },
    };
  }

  return state;
};

export default newsItemReducer;
