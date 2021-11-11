import { LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "./actionTypes";


const initialState = {
  loading: false
};


const newsReducer = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_START){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === LOAD_NEWS_SUCCESS) {
    const itemsObject = {};
    for (let i = 0; i < action.payload.length; i++) {
      itemsObject[action.payload[i].id.toString()] = action.payload[i];
    }
    return {
      ...state,
      loading: false,
      ...itemsObject
    };
  }


  return state;
};

export default newsReducer;
