const initialState = {
  commentsContent: {}
};

export const commentsContent = (state = initialState, action) => {

  switch (action.type){
    
  case 'SET_COMMENTS_CONTENT':
    // console.log(`payload`, action.payload);
    return {
      commentsContent: {
        ...state.commentsContent,
        [action.payload.id]: {
          item: action.payload,
        },
      },
      isLoaded: true
    };
    
  case 'SET_LOADED_COMMENT_CONTENT': 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }
};


//import { LOAD_COMMENT_CONTENT_SUCCESS } from "../comment-content/actionTypes";

/*
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
}; */