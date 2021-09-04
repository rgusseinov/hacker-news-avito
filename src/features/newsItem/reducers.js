import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS } from "./actionTypes";

const initialState = {
  newsItem: [],
  isNewsItemLoaded: false,
};

export const newsItem = (state = initialState, action) => {

  switch (action.type){
      case LOAD_NEWS_ITEM:
        return {
            ...state,
            isNewsItemLoaded: false
        };
      case LOAD_NEWS_ITEM_SUCCESS:
        return {
          ...state,
          newsItem: action.payload,
          isNewsItemLoaded: true
        };
      default: return state;
  }
};
