
import { getNews } from '../../api/api';
import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS } from './actionTypes';

export const loadNewsItems = () => async (dispatch) => {

  // Here we need to load news by ID

  dispatch({
    type: LOAD_NEWS_ITEM
  });

  const news = await getNews();
  const newsItemArr = [];

  news.forEach(newsId => {
    newsItemArr.push({
      [newsId]: {'a': 54, 'b': 32}
    });
  });

  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: newsItemArr
  });

};
