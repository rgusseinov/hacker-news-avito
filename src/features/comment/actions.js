import { URL } from "../../api/api";
import { SET_COMMENT_IDS, SET_LOADED_COMMENT } from "./actionTypes";

export const requestCommentIds = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADED_COMMENT,
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {
    dispatch(setCommentIds(item));
  });

};

export const setCommentIds = (newsCommentIds) => ({
  type: SET_COMMENT_IDS,
  payload: newsCommentIds
});
