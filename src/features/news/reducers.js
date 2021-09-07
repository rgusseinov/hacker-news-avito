import { LOAD_NEWS, LOAD_NEWS_SUCCESS } from "./actionTypes";

const initialState = {
  news: [],
  isLoaded: false,
};

export const news = (state = initialState, action) => {

  switch (action.type){
  case LOAD_NEWS:
    return {
      ...state,
      isLoaded: false
    };
  case LOAD_NEWS_SUCCESS:
    return {
      news: action.payload,
      isLoaded: true
    };
  default: return state;
  }
};
