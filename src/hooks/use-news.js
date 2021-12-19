import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  loadNewsFailure,
  loadNewsStart,
  loadNewsSuccess
} from '../redux/actions/news';
import { NEWS_LIMIT, TIME_INTERVAL } from '../shared/constants';
import { getNewsItem } from '../shared/requests/item';
import { getTopNews } from '../shared/requests/news';

const useNews = () => {
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    requestNews();
    loadNewsPerMinute();

    return () => clearInterval(timerRef.current);
  }, []);

  async function loadNewsPerMinute() {
    await requestNews();

    timerRef.current = setInterval(() => {
      requestNews();
    }, TIME_INTERVAL);
  }

  const requestNews = async () => {
    try {
      let topNewsList = [];
      dispatch(loadNewsStart());

      const newsIds = await getTopNews(NEWS_LIMIT);
      topNewsList = newsIds.map((item) => getNewsItem(item));
      Promise.all(topNewsList).then((data) => dispatch(loadNewsSuccess(data)));
    } catch {
      dispatch(loadNewsFailure());
    }
  };

  const handleRefreshNews = async () => {
    clearInterval(timerRef.current);
    await loadNewsPerMinute();
  };

  return handleRefreshNews;
};

export default useNews;
