import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadComments } from "../../redux/actions/actions";
import { newsItemCommentsSelector } from "../../redux/selectors/reselectors";

import { buildTree } from "../../utils/utils";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { comments } = useSelector(newsItemCommentsSelector);
  const singleComment = comments[id] || {};
  const { item, isLoaded } = singleComment;
  
  useEffect(() => {
    if (item) return;
    dispatch(loadComments(id));
  }, [singleComment]);

  const handleRefreshComments = () => dispatch(loadComments(id));

  const commentsCount = item?.length;
  const tree = buildTree(item || [], id);
  
  return { tree, isLoaded, commentsCount, handleRefreshComments };
};
