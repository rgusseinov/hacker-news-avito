import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS } from "./actionTypes";

const initialState = {
  newsItems: [],
  isLoaded: false,
};

export const newsItems = (state = initialState, action) => {

  switch (action.type){
  case LOAD_NEWS_ITEM:
    return {
      ...state,
      isLoaded: false
    };
  case LOAD_NEWS_ITEM_SUCCESS:
    return {
      ...state,
      newsItems: action.payload,
      isLoaded: true
    };
  default: return state;
  }
};
