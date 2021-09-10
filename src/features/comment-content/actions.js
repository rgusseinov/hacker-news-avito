import { URL } from "../../api/api";
import { SET_COMMENTS_CONTENT, SET_LOADED_COMMENT_CONTENT } from "./actionTypes";

export const requestCommentsContent = (id) => async (dispatch) => {
  dispatch({
    type: SET_LOADED_COMMENT_CONTENT,
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {
    dispatch(setCommentsContent(item));
  });

};

export const setCommentsContent = (newsCommentsContent) => ({
  type: SET_COMMENTS_CONTENT,
  payload: newsCommentsContent
});
