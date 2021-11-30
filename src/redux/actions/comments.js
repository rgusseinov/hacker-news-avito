import { LOAD_COMMENT_FAILURE, LOAD_COMMENT_SUCCESS } from './types';

export const addCommentsSuccess = item => ({
  type: LOAD_COMMENT_SUCCESS,
  payload: item
});

export const addCommentsFailure = () => ({
  type: LOAD_COMMENT_FAILURE,
});
