
import { getItemById } from '../../api/api';
import { LOAD_COMMENT_START, LOAD_COMMENT_SUCCESS } from './actionTypes';

export const loadCommentIds = (id) => async (dispatch) => {
  dispatch({
    type: LOAD_COMMENT_START
  });

  const newsItem = await getItemById(id);
  dispatch({
    type: LOAD_COMMENT_SUCCESS,
    payload: newsItem
  });

};
