import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "./api/api";
import { loadNews, loadNewsFail } from "./redux/actions/actions";
import { TIME_INTERVAL } from "./utils/utils";

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
