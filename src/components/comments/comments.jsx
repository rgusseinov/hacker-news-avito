import { Grid } from '@material-ui/core';
import React from 'react';
import useComments from '../../hooks/use-comments';
import Loader from '../loader/loader';
import Error from '../error/error';
import '../../scss/components/comments.sass';
import CommentList from './comment-list';

const Comments = () => {
  const {
    commentList,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  } = useComments();

  return (
    <Grid item xs={12}>
      {loading ? (
        <Loader />
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
    </Grid>
  );
};

export default Comments;
