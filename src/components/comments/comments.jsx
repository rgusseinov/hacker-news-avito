import { Grid } from '@material-ui/core';
import React, { useState } from 'react';/* 
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; */
import useComments from '../../hooks/use-comments';
import Loader from '../loader/loader';
import Error from '../error/error';
import '../../scss/components/comments.sass';

const Comments = () => {
  const {
    tree,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  } = useComments();


  function renderComments(tree) {
    return (
      <div className="comments-body">
        <div className="comments-row">
          {tree.map(comment => renderCommentItem(comment))}
        </div>
      </div>
    );
  }

  const renderCommentItem = (comment) => {
    if (!comment) return null;

    const [kidsShowed, setKidsShowed] = useState(false);

    const toggleComments = () => {
      setKidsShowed(!kidsShowed);
    };

    return (
      <div className="comments-row">
        <div className="comments-inner">
          <p>
            By <span>{comment.by}</span>
          </p>
          <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
          <hr />
          <a onClick={toggleComments}>
            <strong> Show more </strong>
          </a>
          {comment.children && kidsShowed && comment.children.map(child => {
            return renderCommentItem(child);
          })}
        </div>
      </div>
    );
  };

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
          ) : renderComments(tree)
            // (
            //   <div className="comments-body">
            //     <div className="comments-row">
            //       {/* {renderComments(tree)} */}

            //       {
            //         tree.map(comment => {
            //           return <CommentItem comment={comment} key={comment.id} />;
            //         })
            //       }
            //     </div>
            //   </div>
            // )}
          }
        </>
      )}
    </Grid>
  );
};

export default Comments;
