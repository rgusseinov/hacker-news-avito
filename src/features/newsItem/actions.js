
import { getNews } from '../../api/api';
import { LOAD_NEWS_ITEM, LOAD_NEWS_ITEM_SUCCESS, SET_NEWS_ITEM } from './actionTypes';

export const loadNewsItems = (newsItemId, data) => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS_ITEM
  });

  const news = await getNews(); // ids of news [2445845, 6554482, 6554241, 6325424]
  
  const newsItemArr = []; 

  news.forEach(newsId => {
    if (newsId == newsItemId){
      newsItemArr.push({
        id: newsItemId,
        data: data
      });
    } else {
      newsItemArr.push({
        id: newsId,
        data: {}
      });
    }
  });
  
  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: newsItemArr
  });
};


export const setNewsItem = (newsItem) => ({
  type: SET_NEWS_ITEM,
  payload: newsItem
});
