import { SET_COMMENTS_CONTENT, SET_LOADED_COMMENT_CONTENT } from "./actionTypes";

const initialState = {
  commentsContent: {}
};

export const commentsContent = (state = initialState, action) => {

  switch (action.type){
    
  case SET_COMMENTS_CONTENT:
    return {
      commentsContent: {
        ...state.commentsContent,
        [action.payload.id]: {
          item: action.payload,
        },
      },
      isLoaded: true
    };
    
  case SET_LOADED_COMMENT_CONTENT: 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }
};
