import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadComments } from "../../store/actions";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  // const { newsItems } = useSelector((state) => state.newsItemReducer);
  const singleItem = comments[id];
  const { item } = singleItem || {};

  useEffect(() => { 
    dispatch(loadComments(id));
  }, []);

  console.log(`singleItem`, singleItem, item);

  const handleRefreshComments = () => dispatch(loadComments(id));

  const commentsCount = 0;
  return {commentsCount, handleRefreshComments};
};