import { SET_LOADED, SET_NEWS_ITEMS } from "./actionTypes";

const initialState = {
  newsItems: {},
  isLoaded: false
};

export const newsItems = (state = initialState, action) => {

  switch (action.type){
  case SET_NEWS_ITEMS:
    return {
      newsItems: {
        ...state.newsItems,
        [action.payload.id]: {
          item: action.payload,
        },
      },
      isLoaded: true
    };
    
  case SET_LOADED: 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }

};
