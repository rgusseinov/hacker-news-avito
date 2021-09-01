import {LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_STORY, LOAD_STORIES_SUCCESS, LOAD_STORIES } from "./actionTypes";

const initialState = {
  stories: [],
  story: [],
  comments: [],

  isStoriesLoaded: false,
  isStoryLoaded: false,
  isCommentLoaded: false,
};

export const stories = (state = initialState, action) => {

  switch (action.type){
      case LOAD_STORIES:
        return {
            ...state,
            isStoriesLoaded: false
        };
      case LOAD_STORIES_SUCCESS:
        return {
          ...state,
          stories: action.payload,
          isStoriesLoaded: true
        };
      default: return state;
  }
};

export const story = (state = initialState, action) => {

  switch (action.type){
      case LOAD_STORY:
        return {
          ...state,
          isStoryLoaded: false
        };
      case LOAD_STORIES_SUCCESS:
        return {
          ...state,
            comments: action.payload,
            isStoryLoaded: true
        };
      default: return state;
  }
};

export const comments = (state = initialState, action) => {

  switch (action.type){
      case LOAD_COMMENTS:
        return {
          ...state,
          isCommentLoaded: false
        };
      case LOAD_COMMENTS_SUCCESS:
        return {
          ...state,
            comments: action.payload,
            isCommentLoaded: true
        };
      default: return state;
  }
};
