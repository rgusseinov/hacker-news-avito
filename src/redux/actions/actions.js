import axios from "axios";
import { baseURL } from "../../utils/utils";
import { LOAD_NEWS_FAIL, LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "./actionTypes";

export const loadNews = (newsIds) => async (dispatch) => {
  const promises = [];
  dispatch({ type: LOAD_NEWS_START });

  newsIds.forEach(newsId => promises.push(axios.get(`${baseURL}/item/${newsId}.json`)));
  Promise.all(promises).then(data => {
    return Promise.all(data.map( result => result.data ));
  }).then(data => {
    dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
  });
  
};

export const loadNewsFail = () => async (dispatch) => {
  dispatch({ type: LOAD_NEWS_FAIL });
};
