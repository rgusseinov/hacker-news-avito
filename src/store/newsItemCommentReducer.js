import {LOAD_COMMENT_START, LOAD_COMMENT_SUCCESS } from "./actionTypes";

const initialState = {
  comments: {},
  loading: false
};

const newsItemCommentReducer = (state = initialState, action) => {

  if (action.type === LOAD_COMMENT_START){
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === LOAD_COMMENT_SUCCESS) {
    return {
      comments:{
        ...state.comments,      
        [action.payload.id]: {
          item: action.payload
        },
      },
      loading: false
    };
  }

  return state;
};

export default newsItemCommentReducer;
