import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  addCommentsFailure,
  addCommentsSuccess
} from '../redux/actions/comments';
// import { TIME_INTERVAL } from '../shared/constants';
import { getNewsItem } from '../shared/requests/item';
import { buildTree, getCommentsByIds } from '../shared/utils/comments/comments';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const timerRef = useRef();
  const [loading, setLoading] = useState(false);
  const { comments, isCommentsFailed } = useSelector(
    (state) => state.newsItemReducer
  );
  const singleComment = comments[id];
  const item = singleComment || [];

  useEffect(() => {
    if (singleComment) return;
    requestComments();

    
    timerRef.current = setInterval(() => {
      console.log('setInterval');
      requestComments();
    }, 60000);

    return () => clearInterval(timerRef);
  }, [singleComment]);

  const requestComments = async () => {
    try {
      setLoading(true);
      const response = await getNewsItem(id);
      if (!response.kids) return [];

      try {
        const commentList = await getCommentsByIds(response.kids);
        const payload = { id, item: commentList };
        dispatch(addCommentsSuccess(payload));
      } catch {
        dispatch(addCommentsFailure());
      }
    } catch {
      dispatch(addCommentsFailure());
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshComments = () => requestComments();
  const commentsCount = item?.length;

  const commentList = buildTree(item, id);

  return {
    commentList,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  };
};
