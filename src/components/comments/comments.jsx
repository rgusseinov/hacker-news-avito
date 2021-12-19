import React from 'react';
import useComments from '../../hooks/use-comments';
import Error from '../error/error';
import '../../scss/components/comments.sass';
import CommentList from './comment-list';
import ContentLoader from '../loader/content-loader';

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
      {loading ? (
        <ContentLoader />
      ) : (
        <>
          <div className="comments-header">
            <div>
              <h2>{commentsCount} Comments</h2>
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
            <CommentList
              commentList={commentList}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Comments;
