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
      let newsList = [];
      dispatch(loadNewsStart());

      const topNewsIds = await getTopNews(NEWS_LIMIT);
      newsList = topNewsIds.map((item) => getNewsItem(item));

      const topNewsList = await Promise.all(newsList);
      dispatch(loadNewsSuccess(topNewsList));
            
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
