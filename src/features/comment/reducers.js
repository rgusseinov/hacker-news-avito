import { SET_COMMENT_IDS, SET_LOADED_COMMENT } from "./actionTypes";

const initialState = {
  commentIds: {},
  isLoaded: false
};

export const commentIds = (state = initialState, action) => {

  switch (action.type){
    
  case SET_COMMENT_IDS:
    return {
      commentIds: {
        ...state.commentIds,
        [action.payload.id]: {
          item: action.payload.kids,
        },
      },
      isLoaded: true
    };
    
  case SET_LOADED_COMMENT: 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }

};
