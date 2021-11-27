import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import {  LOAD_NEWS_FAIL, LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "../src/redux/actions/actionTypes";
import { baseURL, ITEMS_LIMIT, TIME_INTERVAL } from "./utils/utils";

const useNews = () => {

  const dispatch = useDispatch();
  const timerRef = useRef();

  const requestNews = async() => {
    try {
      const result = await axios.get(`${baseURL}/topstories.json`);
      const newsIds = result.data.slice(0, ITEMS_LIMIT) || [];
      loadNews(newsIds);
    } catch {
      dispatch({ type: LOAD_NEWS_FAIL });
    }
  };

  const loadNews = (newsIds) => {
    const promises = [];
    dispatch({ type: LOAD_NEWS_START });

    newsIds.forEach(newsId => {
      promises.push(axios.get(`${baseURL}/item/${newsId}.json`));
    });

    Promise.all(promises).then(data => {
      return Promise.all(data.map( result => result.data ));
    }).then(data => {

      dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
    }).catch (
      // dispatch({ type: LOAD_NEWS_FAIL })
    );
  };

  
  useEffect(() => {
    requestNews();
    timerRef.current = setInterval(() => requestNews(), TIME_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleRefreshNews = () => requestNews();

  return handleRefreshNews;
};

export default useNews;
