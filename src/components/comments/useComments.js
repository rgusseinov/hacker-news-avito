import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCommentsByIds } from "../../redux/actions/actions";
import { LOAD_COMMENT_SUCCESS } from "../../redux/actions/actionTypes";
// import { newsItemCommentsSelector } from "../../redux/selectors/reselectors";

import { baseURL, buildTree } from "../../utils/utils";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const { comments } = useSelector(state => state.newsItemReducer);  
  const singleComment = comments[id];
  const item = singleComment || [];
  
  useEffect(() => {
    if (singleComment) return;
    loadComments();
  }, [singleComment]);


  const loadComments = () => {
    setLoading(true);

    axios.get(`${baseURL}/item/${id}.json`).then(response => {
      if (!response.data.kids) return [];
      const commentList = getCommentsByIds(response.data.kids);
      return commentList;
    }).then(comments => {
      const payload = { id, item: comments };        
      dispatch({ type: LOAD_COMMENT_SUCCESS, payload });
      setLoading(false);
    });
  
  };


  const handleRefreshComments = () => loadComments();
  const commentsCount = item?.length;
  const tree = buildTree(item, id);
  
  return { tree, loading, commentsCount, handleRefreshComments };
};
