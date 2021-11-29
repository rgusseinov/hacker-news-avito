import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loadNews } from "../redux/actions/news";
import { TIME_INTERVAL } from "../shared/constants";

const useNews = () => {
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    requestNews();
    timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const requestNews = () => {
    try {
      dispatch(loadNews());
    } catch (e) {
      console.error(`Что-то пошло не так: ${e}`);
    }
  };

  const handleRefreshNews = () => requestNews();
  return handleRefreshNews;
};

export default useNews;
