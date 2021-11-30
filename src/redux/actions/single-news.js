import { LOAD_NEWS_ITEM_FAILURE, LOAD_NEWS_ITEM_SUCCESS } from './types';

export const addNewsItemSuccess = item => ({
  type: LOAD_NEWS_ITEM_SUCCESS,
  payload: item
});

export const addNewsItemFailure = () => ({
  type: LOAD_NEWS_ITEM_FAILURE,
});
