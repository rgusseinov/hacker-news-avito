import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loadNews } from "./redux/actions/actions";
import { baseURL, ITEMS_LIMIT, TIME_INTERVAL } from "./utils/utils";
import axios from 'axios';

export default () => {

  const dispatch = useDispatch();
  const timerRef = useRef();

  const requestNews = async() => {
    try {
      const result = await axios.get(`${baseURL}/topstories.json`);
      const newsIds = result.data.slice(0, ITEMS_LIMIT) || [];
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

