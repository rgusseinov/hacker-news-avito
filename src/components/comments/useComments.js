import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCommentsByIds } from "../../redux/actions/actions";
import { LOAD_COMMENT_FAIL, LOAD_COMMENT_SUCCESS } from "../../redux/actions/actionTypes";
import { baseURL, buildTree } from "../../utils/utils";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const { comments, isCommentsFailed } = useSelector(state => state.newsItemReducer);  
  const singleComment = comments[id];
  const item = singleComment || [];
  
  useEffect(() => {
    if (singleComment) return;
    loadComments();
  }, [singleComment]);


  const loadComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/item/${id}.json`);
      if (!response.data.kids) return [];
      const commentList = getCommentsByIds(response.data.kids);

      commentList.then(comments => {
         
        dispatch({ type: LOAD_COMMENT_SUCCESS, payload: { id, item: comments } });
        setLoading(false);
        
      }).catch (() => {
        setLoading(false);
        dispatch({ type: LOAD_COMMENT_FAIL });
      });

    } catch {
      setLoading(false);
      dispatch({ type: LOAD_COMMENT_FAIL });
    }
  
  };


  const handleRefreshComments = () => loadComments();
  const commentsCount = item?.length;
  const tree = buildTree(item, id);
  
  return { tree, loading, isCommentsFailed, commentsCount, handleRefreshComments };
};
