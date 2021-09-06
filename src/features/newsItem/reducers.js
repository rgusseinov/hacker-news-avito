import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS, SET_NEWS_ITEM } from "./actionTypes";

const initialState = {
  newsItems: [],
  isLoaded: false,
};

export const newsItems = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_ITEM){
    return {
      ...state,
      isLoaded: false
    };
  }

  if (action.type === LOAD_NEWS_ITEM_SUCCESS){
    return {
      ...state,
      newsItems: action.payload,
      isLoaded: true
    };
  }
  
  if (action.type === SET_NEWS_ITEM){
    return {
      ...state,
      newsItems: action.payload,
      isLoaded: true
    };
  }
  
  return state;

};
