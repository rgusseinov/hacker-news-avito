import { getItem } from "../../shared/requests/item";
import { getNews } from '../../shared/requests/news';
import { LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from './types';

export const loadNews = () => async (dispatch) => {
  const promises = [];
  dispatch({ type: LOAD_NEWS_START });
  
  const newsIds = await getNews();
  newsIds.forEach(newsId => promises.push(getItem(newsId)));

  Promise.all(promises).then(data => {
    return Promise.all(data.map( result => result ));
  }).then(data => {
    dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
  });

  // dispatch({ type: LOAD_NEWS_FAILURE });
  
};

/* import { LOAD_COMMENT_FAILURE, LOAD_COMMENT_SUCCESS } from './types';

export const addCommentsSuccess = item => ({
  type: LOAD_COMMENT_SUCCESS,
  payload: item
});

export const addCommentsFailure = () => ({
  type: LOAD_COMMENT_FAILURE,
});
 */