import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loadNews, loadNewsFail } from "../redux/actions/news";
import { getNews } from "./requests/news";
import { TIME_INTERVAL } from "../shared/constants";

const useNews = () => {
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    requestNews();
    timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const requestNews = async() => {
    try {
      const newsIds = await getNews();
      dispatch(loadNews(newsIds));
    } catch {
      dispatch(loadNewsFail());
    }
  };

  const handleRefreshNews = () => requestNews();
  return handleRefreshNews;
};

export default useNews;
