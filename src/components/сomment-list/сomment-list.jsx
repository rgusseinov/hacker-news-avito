import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CommentItem from '../сomment-item/сomment-item';

function CommentList(){

  const { id } = useParams();
  const {commentIds } = useSelector(({ commentIds }) => commentIds);
  const comments = commentIds[id];

  useEffect(() => {
  }, []);
  return (
    <div>
      { comments?.item && comments?.item.map((commentId, key) => {
        return (
          <CommentItem
            key={key}
            commentId={commentId}
          />);
      })
      }
    </div>
  );  
}

export default CommentList;
