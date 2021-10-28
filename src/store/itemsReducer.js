import { ITEMS_LOADER_OFF, ITEMS_LOADER_ON, LOAD_ITEMS } from "./actionTypes";


const initialState = {
  loading: false
};

const itemsReducer = (state = initialState, action) => {

  if (action.type === LOAD_ITEMS) {
    return {
      ...state,
      items: action.data
    };
  }

  if (action.type === ITEMS_LOADER_ON){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === ITEMS_LOADER_OFF){
    return {
      ...state,
      loading: false
    };
  }


  return state;
};

export default itemsReducer;
