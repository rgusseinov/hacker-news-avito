import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadComments } from "../../store/actions";
import { buildTree } from "../../utils/utils";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  const singleComment = comments[id] || {};
  const { item, isLoaded } = singleComment;
  
  useEffect(() => {
    if (item) return;
    dispatch(loadComments(id));
  }, [singleComment]);

  const handleRefreshComments = () => dispatch(loadComments(id));

  // if (!singleComment) return null;
  const commentsCount = item?.length;
  console.log(`item`, item);

  const tree = buildTree(item || [], id);
  
  return { tree, isLoaded, commentsCount, handleRefreshComments };
};
