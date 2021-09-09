import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCommentsContent } from "../../features/comment-content/actions";
import { loadCommentIds } from '../../features/comment/actions';

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { commentIds } = useSelector(({ commentIds }) => commentIds);
  const commentItem = commentIds[id];

  useEffect(() => {
    if (commentItem) return;
    
    dispatch(loadCommentIds(id));
    dispatch(loadCommentsContent(id));
    
  }, [commentItem]); // singleNews in state change


  return commentItem;
};