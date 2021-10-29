import { ITEMS_LOADER_OFF, ITEMS_LOADER_ON, LOAD_ITEMS } from "./actionTypes";


const initialState = {
  loading: false
};

/*
  10: {
    item: {}
  },
  20: {
    items: {}
  }
*/

const itemsReducer = (state = initialState, action) => {

  if (action.type === LOAD_ITEMS) {

    const itemsObject = {};
    for (let i = 0; i < action.data.length; i++) {
      itemsObject[action.data[i].id.toString()] = action.data[i];
    }

    return {
      ...state,
      ...itemsObject
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
