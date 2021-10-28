import { COMMENTS_LOADER_OFF, COMMENTS_LOADER_ON, LOAD_COMMENTS } from "./actionTypes";

const initialState = {
  loading: false
};

const commentsReducer = (state = initialState, action) => {

  if (action.type === LOAD_COMMENTS){
    return {
      ...state,
      [action.payload.id]: {
        items:[...action.payload.data]
      }
    };
  }

  if (action.type === COMMENTS_LOADER_ON){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === COMMENTS_LOADER_OFF){
    return {
      ...state,
      loading: false
    };
  }

  return state;
};

export default commentsReducer;
