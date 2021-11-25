import {LOAD_COMMENT_SUCCESS } from "../actions/actionTypes";

const initialState = {
  comments: {}
};

const newsItemCommentReducer = (state = initialState, action) => {

  if (action.type === LOAD_COMMENT_SUCCESS) {
    return {
      comments:{
        ...state.comments,
        [action.payload.id]: {
          item: action.payload.item,
          isLoaded: true
        },
      },
    };
  }

  return state;
};

export default newsItemCommentReducer;
