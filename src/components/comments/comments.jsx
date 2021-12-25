import React from 'react';
import useComments from '../../hooks/use-comments';
import Error from '../error/error';
import CommentList from './comment-list';
import ContentLoader from '../loader/content-loader';
import '../../scss/components/comments.sass';

const Comments = () => {
  const {
    commentList,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  } = useComments();

  return (
    <div>
      <div className="comments-header">
        <div className="section">
          <div className="title">
            {commentsCount
              ? `${commentsCount} Comments`
              : `No comments yet`}
          </div>
          {loading && <ContentLoader />}
        </div>
        <div>
          <button className="button" onClick={handleRefreshComments}>
            Refresh
          </button>
        </div>
      </div>
      {isCommentsFailed ? (
        <Error />
      ) : (
        <CommentList commentList={commentList} />
      )}
    </div>
  );
};

export default Comments;
