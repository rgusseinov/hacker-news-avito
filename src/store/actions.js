import { LOAD_NEWS_ITEM_SUCCESS, LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "./actionTypes";
import {getItemById} from '../api/api';

export function loadNews(newsItemsIds){
  return async dispatch => {

    const promises = [];
    for (let i=0; i < newsItemsIds.length; i++){
      promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${newsItemsIds[i]}.json`));
    }

    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(data => {
      // console.log(`data`, data);
      dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
    }).finally(() => {
      dispatch({ type: LOAD_NEWS_START });
    });

  };
}

export const setNewsItem = (newsItem) => ({
  type: LOAD_NEWS_ITEM_SUCCESS,
  payload: newsItem
});

export const requestSignleNewsItem = (id) => async (dispatch) => {
  const singleNewsItem = await getItemById(id);
  const action = setNewsItem(singleNewsItem);

  dispatch(action);
};



/* export function loadItem(id){
  return async dispatch => {

    dispatch({ type: ITEM_LOADER_ON });

    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const jsonData = await response.json();

    dispatch({
      type: ITEM_ADD,
      data: jsonData
    });
    
    dispatch({ type: ITEM_LOADER_OFF });

  };
}

export function loadComments(id, kids){
  return async dispatch => {

    const promises = [];
    for (let i=0; i < kids.length; i++){
      promises.push( fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json`) );
    }
    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(finalData => {
      const payload =  {
        id,
        data: finalData
      };      
      dispatch({ type: LOAD_COMMENTS, payload });
    });

  };
}

export function updateComments(id){
  return async dispatch => {

    dispatch({ type: COMMENTS_LOADER_ON });
    
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const jsonData = await response.json();

    const promises = [];
    const kids = jsonData.kids || [];
    for (let i=0; i < kids.length; i++){
      promises.push( fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json`) );
    }
    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(finalData => {
      const payload =  {
        id,
        data: finalData
      };      
      dispatch({ type: LOAD_COMMENTS, payload });
    }).finally(() => {
      dispatch({ type: COMMENTS_LOADER_OFF });
    });

  };
} */

