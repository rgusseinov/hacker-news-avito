import { ITEM_ADD } from "./actionTypes";


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
  items: {}
};

const itemReducer = (state = initialState, action) => {

  if (action.type == ITEM_ADD) {    
    const { items } = state;
    const itemNew = items.push(action.payload);

    return {
      ...state,
      items: itemNew
    };
  }

  return state;
  

};

export default itemReducer;
