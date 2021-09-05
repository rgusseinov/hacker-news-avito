import { LOAD_NEWS, LOAD_NEWS_SUCCESS } from "./actionTypes";

const initialState = {
  news: [],
  isNewsLoaded: false,
};

export const news = (state = initialState, action) => {

  switch (action.type){
  case LOAD_NEWS:
    return {
      ...state,
      isNewsLoaded: false
    };
  case LOAD_NEWS_SUCCESS:
    return {
      ...state,
      news: action.payload,
      isNewsLoaded: true
    };
  default: return state;
  }
};
