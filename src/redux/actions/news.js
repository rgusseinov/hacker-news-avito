import { LOAD_NEWS_FAILURE, LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from './types';

export const loadNewsStart = () => ({
  type: LOAD_NEWS_START
});

export const loadNewsSuccess = (news) => ({
  type: LOAD_NEWS_SUCCESS,
  payload: news
});

export const loadNewsFailure = () => ({
  type: LOAD_NEWS_FAILURE
});
