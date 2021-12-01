import { createSelector } from 'reselect';

const selectNewsState = (state) => state.newsReducer;
export const newsSelector = createSelector([selectNewsState], (news) => news);
