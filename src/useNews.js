import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getTopNews } from "./api/api";
import { loadNews } from "./store/actions";
import { ITEMS_LIMIT, TIME_INTERVAL } from "./utils/utils";

export default () => {

  const dispatch = useDispatch();
  const timerRef = useRef();

  const requestNews = async() => {
    try {
      const result = await getTopNews();
      const newsIds = result.slice(0, ITEMS_LIMIT) || [];
      dispatch(loadNews(newsIds));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    requestNews();
    timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleRefreshNews = () => requestNews();

  return handleRefreshNews;
};

