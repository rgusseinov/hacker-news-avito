import { LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "./actionTypes";

const initialState = {
  newsIds: [],
  loading: false,
};

export const news = (state = initialState, action) => {

  switch (action.type){
  case LOAD_NEWS_START:
    return {
      ...state,
      loading: true
    };
  case LOAD_NEWS_SUCCESS:
    return {
      newsIds: action.payload,
      loading: false
    };
  default: return state;
  }
  
};