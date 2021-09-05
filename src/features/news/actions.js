
import { getNews } from '../../api/api';
// import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS } from '../newsItem/actionTypes';
import { LOAD_NEWS, LOAD_NEWS_SUCCESS } from './actionTypes';

export const loadNews = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS
  });

  const news = await getNews();

  dispatch({
    type: LOAD_NEWS_SUCCESS,
    payload: news
  });


  /*   // News items
  dispatch({
    type: LOAD_NEWS_ITEM
  });
  const newsItemArr = [];

  news.forEach(newsId => {
    newsItemArr.push({
      [newsId]: {}
    });
  });

  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: newsItemArr
  });
 */

};
