import {LOAD_COMMENT_SUCCESS, SETUP_COMMENT_ID } from "./actionTypes";

const initialState = {
  comments: {},
  loading: false
};

const newsItemCommentReducer = (state = initialState, action) => {

  /* if (action.type === LOAD_COMMENT_START){
    return {
      ...state,
      loading: true
    };
  } */

  if (action.type === SETUP_COMMENT_ID){
    
    const commentsObject = {};
    for (let i = 0; i < action.payload.length; i++) {
      const id = action.payload[i].id.toString();
      commentsObject[id] = { item: null, isLoaded: false };
    }

    return {
      ...state,
      comments: commentsObject
    };    
  }


  if (action.type === LOAD_COMMENT_SUCCESS) {
    return {
      comments:{
        ...state.comments,
        [action.payload.id]: {
          item: action.payload,
          isLoaded: true
        },
      },
      loading: false
    };
  }

  return state;
};

export default newsItemCommentReducer;
