import { LOAD_COMMENT_SUCCESS, LOAD_NEWS_ERROR, LOAD_NEWS_ITEM_SUCCESS, LOAD_NEWS_START, LOAD_NEWS_SUCCESS } from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../utils/utils";


/* News */
export function loadNews(newsItemsIds){
  return async dispatch => {
    const promises = [];

    dispatch({ type: LOAD_NEWS_START });

    for (let i=0; i < newsItemsIds.length; i++){
      promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${newsItemsIds[i]}.json`));
    }

    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(data => {
      dispatch({ type: LOAD_NEWS_SUCCESS, payload: data });
    });

  };
}



/* News Item */
export const requestSignleNews = (id) => async (dispatch) => {
  const singleNewsItem = await axios.get(`${baseURL}/item/${id}.json`);
  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS,
    payload: singleNewsItem.data
  });
};



/* Commments */
export const loadComments = (id) => {
  
  return async dispatch => {   
    const response = await axios.get(`${baseURL}/item/${id}.json`);
    if (!response.data.kids) return [];
    const commentList = getCommentsByIds(response.data.kids);

    console.log(`commentsData`, commentList);

    commentList.then(comments => {
      const payload = { id, item: comments };        
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
        allKidsIds = allKidsIds.concat(item?.kids || []);
      });
      
      if (allKidsIds.length === 0) return res;

      return getCommentsByIds(allKidsIds).then((children) => {
        return children.concat(res);
      });

    }).catch((err) => {
      console.error(`Что-то пошло не так: `, err);
    });

}

export const registerError = () => {
  return async dispatch => {
    dispatch({ type: LOAD_NEWS_ERROR });
  };
};
