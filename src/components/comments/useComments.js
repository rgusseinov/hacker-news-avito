import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadComments } from "../../store/actions";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const { comments } = useSelector((state) => state.newsItemCommentReducer);
  const { newsItems } = useSelector((state) => state.newsItemReducer);
  const singleNews = newsItems[id];
  const { item } = singleNews;
  const commentsCount = item.descendants;

  useEffect(() => { 

    // if (comments[id]) return; // removed on 10.11.2021
    dispatch(loadComments(id));

  }, [item]);

  // console.log(`comments`, comments[id]);


  const handleRefreshComments = () => dispatch(loadComments(id));

  return {commentsCount, handleRefreshComments};
};