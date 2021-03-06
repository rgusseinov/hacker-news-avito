import {
  LOAD_COMMENTS_SUCCESS,
  LOAD_NEWS_ITEM_FAILURE,
  LOAD_COMMENTS_FAILURE,
  LOAD_NEWS_ITEM_SUCCESS
} from '../actions/types';

const initialState = {
  newsItems: {},
  comments: {},

  isItemsFailed: false,
  isCommentsFailed: false
};

const newsItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS_ITEM_SUCCESS:
      return {
        ...state,
        isItemsFailed: false,
        isCommentsFailed: false,
        newsItems: {
          ...state.newsItems,
          [action.payload.id]: {
            item: action.payload
          }
        }
      };

    case LOAD_NEWS_ITEM_FAILURE:
      return {
        ...state,
        isItemsFailed: true
      };

    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        isCommentsFailed: false,
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload.item
        }
      };

    case LOAD_COMMENTS_FAILURE:
      return {
        ...state,
        isCommentsFailed: true
      };

    default:
      return state;
  }
};

export default newsItemReducer;
