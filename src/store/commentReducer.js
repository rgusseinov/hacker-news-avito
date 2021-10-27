import { LOAD_COMMENTS } from "./actionTypes";

const initialState = {};

const commentsReducer = (state = initialState, action) => {

  if (action.type === LOAD_COMMENTS){
    return {
      ...state,
      [action.payload.id]: {
        items:[...action.payload.data]
      }
    };
  }

  return state;
};

export default commentsReducer;
