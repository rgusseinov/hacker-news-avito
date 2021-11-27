import { createSelector } from 'reselect';

const selectNews = state => state.newsReducer;
export const newsSelector = createSelector(
  [selectNews],
  (news) => news
);

const selectNewsItem = state => state.newsItemReducer;
export const newsItemSelector = createSelector(
  [selectNewsItem],
  (newsItem) => newsItem
);
