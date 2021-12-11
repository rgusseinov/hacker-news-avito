import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  loadNewsFailure,
  loadNewsStart,
  loadNewsSuccess
} from '../redux/actions/news';
import { NEWS_LIMIT } from '../shared/constants';
import { getNewsItem } from '../shared/requests/item';
import { getTopNews } from '../shared/requests/news';

const useNews = () => {
  const dispatch = useDispatch();
  // const timerRef = useRef();

  useEffect(() => {
    requestNews();
    // timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    // return () => clearInterval(timerRef.current);
  }, []);

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

  const handleRefreshNews = () => requestNews();
  return handleRefreshNews;
};

export default useNews;
