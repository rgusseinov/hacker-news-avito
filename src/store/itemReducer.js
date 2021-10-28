import { ITEM_ADD, ITEM_LOADER_ON, ITEM_LOADER_OFF } from "./actionTypes";

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
