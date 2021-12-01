import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  loadNewsFailure,
  loadNewsStart,
  loadNewsSuccess
} from '../redux/actions/news';
import { TIME_INTERVAL } from '../shared/constants';
import { getItem } from '../shared/requests/item';
import { getNews } from '../shared/requests/news';

const useNews = () => {
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    requestNews();
    timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const requestNews = async () => {
    try {
      const promises = [];
      dispatch(loadNewsStart());

      const newsIds = await getNews();
      newsIds.forEach((newsId) => promises.push(getItem(newsId)));

      Promise.all(promises)
        .then((data) => Promise.all(data.map((result) => result)))
        .then((data) => dispatch(loadNewsSuccess(data)));
    } catch {
      dispatch(loadNewsFailure());
    }
  };

  const handleRefreshNews = () => requestNews();
  return handleRefreshNews;
};

export default useNews;
