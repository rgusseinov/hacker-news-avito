import { LOAD_NEWS_ITEM_START, LOAD_NEWS_ITEM_SUCCESS } from "./actionTypes";

const initialState = {
  newsItems: {},
  loading: false
};

const newsItemReducer = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_ITEM_START){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === LOAD_NEWS_ITEM_SUCCESS) {
    return {
      ...state.newsItems,
      [action.payload.id]:{
        item: action.payload,
        loading: false
      }
    };
  }


  return state;
};

export default newsItemReducer;
