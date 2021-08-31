
import { getItemById, getNewStories } from '../../api/api';
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_STORIES, LOAD_STORIES_SUCCESS, LOAD_STORY, LOAD_STORY_SUCCESS } from './actionTypes';

export const loadStories = () => async (dispatch) => {
  dispatch({
    type: LOAD_STORIES
  });

  const stories = await getNewStories();

  dispatch({
    type: LOAD_STORIES_SUCCESS,
    payload: stories
  });

};


export const loadCommentByItemId = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_COMMENTS
  });

  const comments = await getItemById(id);

  dispatch({
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  });

};


export const loadStoryById = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_STORY
  });

  const comments = await getItemById(id);

  dispatch({
    type: LOAD_STORY_SUCCESS,
    payload: comments
  });

};
