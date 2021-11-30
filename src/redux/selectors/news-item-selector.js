import { createSelector } from 'reselect';

const selectNewsItemState = state => state.newsItemReducer;
export const newsItemSelector = createSelector(
  [selectNewsItemState],
  (newsItem) => newsItem
);
