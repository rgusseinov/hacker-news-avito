import { LOAD_COMMENTS_FAILURE, LOAD_COMMENTS_SUCCESS } from './types';

export const addCommentsSuccess = (item) => ({
  type: LOAD_COMMENTS_SUCCESS,
  payload: item
});

export const addCommentsFailure = () => ({
  type: LOAD_COMMENTS_FAILURE
});
