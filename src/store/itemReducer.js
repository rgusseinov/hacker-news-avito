import { ITEM_ADD, ITEM_LOADER_ON, ITEM_LOADER_OFF } from "./actionTypes";


/*
  [id]:{
    title: 'News title',
    score: 15,
    kids: [1, 5, 6]
  },
  [id]:{
    title: 'News title 2',
    score: 4,
  } 
*/


const initialState = {
  loading: false
};

const itemReducer = (state = initialState, action) => {

  if (action.type === ITEM_ADD) {
    return {
      ...state,
      [action.data.id]:{
        ...action.data
      }
    };
  }

  if (action.type === ITEM_LOADER_ON){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === ITEM_LOADER_OFF){
    return {
      ...state,
      loading: false
    };
  }

  return state;
};

export default itemReducer;
