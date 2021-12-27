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
    loadNewsPerMinute();

    return () => clearTimeout(timerRef.current);
  }, []);

  async function loadNewsPerMinute() {
    await requestNews();

    timerRef.current = setTimeout(() => {
      loadNewsPerMinute();
    }, TIME_INTERVAL);

  }

  const requestNews = async () => {
    try {
      dispatch(loadNewsStart());

      const topNewsIds = await getTopNews(NEWS_LIMIT);
      const newsList = topNewsIds.map((item) => getNewsItem(item));

      const topNewsList = await Promise.all(newsList);
      dispatch(loadNewsSuccess(topNewsList));
    } catch {
      dispatch(loadNewsFailure());
    }
  };

  const handleRefreshNews = async () => {
    clearTimeout(timerRef.current);
    await loadNewsPerMinute();
  };

  return handleRefreshNews;
};

export default useNews;
