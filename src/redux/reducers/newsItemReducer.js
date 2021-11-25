import { LOAD_NEWS_ITEM_SUCCESS } from "../actions/actionTypes";

const initialState = {
  newsItems: {},
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

  return state;
};

export default newsItemReducer;
