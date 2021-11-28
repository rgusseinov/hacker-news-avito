import { LOAD_COMMENT_FAIL, LOAD_COMMENT_SUCCESS, LOAD_NEWS_ITEM_FAIL, LOAD_NEWS_ITEM_SUCCESS } from "../actions/actionTypes";

const initialState = {
  newsItems: {},
  comments: {},
  isItemsFailed: false,
  isCommentsFailed: false
};

const newsItemReducer = (state = initialState, action) => {

  switch (action.type){

  case LOAD_NEWS_ITEM_SUCCESS:
    return {
      ...state,
      isItemsFailed: false,
      newsItems:{
        ...state.newsItems,
        [action.payload.id]: {
          item: action.payload
        },
      },
    };

  case LOAD_NEWS_ITEM_FAIL:
    return {
      ...state,
      isItemsFailed: true,
    };
  
  case LOAD_COMMENT_SUCCESS:
    return {
      ...state,
      isCommentsFailed: false,
      comments:{
        ...state.comments,
        [action.payload.id]: action.payload.item
      },
    };
  
  case LOAD_COMMENT_FAIL:
    return {
      ...state,
      isCommentsFailed: true,
    };
  
  default: return state;
  }
};

export default newsItemReducer;
