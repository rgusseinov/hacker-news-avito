import { LOAD_COMMENT_SUCCESS } from "./actionTypes";

const initialState = {
  commentIds: {},
  commentsContent:{}
};

export const commentIds = (state = initialState, action) => {

  if (action.type === LOAD_COMMENT_SUCCESS){
    return {
      commentIds: {
        ...state.commentIds,
        [action.payload.id]: {
          items: action.payload.kids,
        },
      },
    };
  }  

  return state;
};
