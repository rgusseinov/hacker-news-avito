import { URL } from "../../api/api";
import { SET_LOADED, SET_NEWS_ITEMS } from "./actionTypes";

export const requestSingleNews = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {    
    dispatch(setNewsItem(item));
  });

};

export const setNewsItem = (newsItem) => ({
  type: SET_NEWS_ITEMS,
  payload: newsItem
});
