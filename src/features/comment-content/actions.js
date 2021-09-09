import { URL } from "../../api/api";

export const requestCommentsContent = (id) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED_COMMENT_CONTENT', // Перекликается с ждругим loading'ом в news Item. Нужно исправить.
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {
    // console.log('item', item);
    dispatch(setCommentsContent(item));
  });

};

export const setCommentsContent = (newsCommentsContent) => ({
  type: 'SET_COMMENTS_CONTENT',
  payload: newsCommentsContent
});












/* import { getItemById } from "../../api/api";
import { LOAD_COMMENT_CONTENT_SUCCESS } from '../../features/comment-content/actionTypes';

export const loadCommentsContent = (itemId) => async (dispatch) => {
  const itemData = await getItemById(itemId);
  const commentsContent = [];
  
  for (let itemKid of itemData.kids){
    let kid = await getItemById(itemKid);
    commentsContent.push(kid);
  }

  dispatch({
    type: LOAD_COMMENT_CONTENT_SUCCESS,
    payload: {itemData, commentsContent}
  });

};

 */