import { LOAD_COMMENT_SUCCESS, LOAD_NEWS_ITEM_START, LOAD_NEWS_ITEM_SUCCESS, LOAD_NEWS_START, LOAD_NEWS_SUCCESS, SETUP_COMMENT_ID, SETUP_NEWS_ITEMS_ID } from "./actionTypes";
import {getItemById} from '../api/api';
// import { useDispatch } from "react-redux";

/* News */

export function loadNews(newsItemsIds){
  return async dispatch => {

    dispatch({ type: LOAD_NEWS_START });

    const promises = [];
    for (let i=0; i < newsItemsIds.length; i++){
      promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${newsItemsIds[i]}.json`));
    }

    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(data => {
      dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
      dispatch({ type: SETUP_NEWS_ITEMS_ID, payload: data });
      dispatch({ type: SETUP_COMMENT_ID, payload: data });
    });

  };
}


/* News Item */



export const requestSignleNewsItem = (id) => async (dispatch) => {
  const singleNewsItem = await getItemById(id);

  dispatch({ type: LOAD_NEWS_ITEM_START });

  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: singleNewsItem
  });

};



/* Commments */
/* export const requestNewsItemComments = (id) => async (dispatch) => {
  // const singleNewsItemComment = await getItemById(id);
  dispatch(loadComments(id));
};
 */

/* export function loadComments(id, kids){
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
        item: finalData
      };

      dispatch({ type: LOAD_COMMENT_SUCCESS, payload });
    });
  };
} */


export const loadComments = (id) => {
  
  return async dispatch => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!res.kids) return [];
        return getCommentsByIds(res.kids);
      })
      .then(comments => {
        const payload =  {
          id,
          item: comments
        };        
        dispatch({ type: LOAD_COMMENT_SUCCESS, payload });
      });
  };
};


function getCommentsByIds(kids) {

  const arrayOfKids = kids.map((kid) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`, {
      method: "GET",
    })
  );

  return Promise.all(arrayOfKids)
    .then((allResults) => {
      return Promise.all(allResults.map((result) => result.json()));
    })
    .then((res) => {

      
      let allKidsIds = [];
      
      res.forEach((item) => {
        allKidsIds = allKidsIds.concat(item.kids || []);
      });
      
      if (allKidsIds.length === 0) return res;    
    
      return getCommentsByIds(allKidsIds).then((children) => {
        return children.concat(res);
      });

    });

}