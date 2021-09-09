import { LOAD_COMMENT_CONTENT_SUCCESS } from "../comment-content/actionTypes";

const initialState = {
  commentsContent:{}
};

export const commentsContent = (state = initialState, action) => {
  if (action.type === LOAD_COMMENT_CONTENT_SUCCESS){
    return {
      commentsContent: {
        ...state.commentsContent,
        [action.payload.itemData.id]: {
          items: action.payload.commentsContent,
        },
      },
    };
  }
  return state;
};
