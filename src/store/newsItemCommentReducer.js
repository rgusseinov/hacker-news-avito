import {LOAD_COMMENT_SUCCESS, SETUP_COMMENT_ID } from "./actionTypes";

const initialState = {
  comments: {}
};

const newsItemCommentReducer = (state = initialState, action) => {

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
    };
  }

  return state;
};

export default newsItemCommentReducer;
