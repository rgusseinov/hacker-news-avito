import React from 'react';
import CommentItem from '../сomment-item/сomment-item';

// Массив ID'ков
function CommentList({ commentIds }){
  return (
    <div>
      { commentIds && commentIds.map((commentId, key) => {
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
