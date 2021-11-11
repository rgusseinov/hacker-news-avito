import { LOAD_NEWS_ITEM_START, LOAD_NEWS_ITEM_SUCCESS, SETUP_NEWS_ITEMS_ID } from "./actionTypes";

const initialState = {
  newsItems: {},
};

const newsItemReducer = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_ITEM_START){
    return {
      ...state,
    };
  }

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


  if (action.type === SETUP_NEWS_ITEMS_ID){
    const itemsObject = {};    
    for (let i = 0; i < action.payload.length; i++) {
      const id = action.payload[i].id.toString();
      itemsObject[id] = { item: null, isLoaded: false };
    }
    return {
      ...state,
      newsItems: itemsObject
    };    
  }


  return state;
};

export default newsItemReducer;
