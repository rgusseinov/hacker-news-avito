import React from 'react';
import CommentItem from '../сomment-item/сomment-item';

function CommentList({ comments }){
  
  return (
    <div>
      { comments && comments.map((commentId, key) => {
        return (<CommentItem
          key={key}
          commentId={commentId}
          />);
        })
      }
    </div>
  );
  
}

export default CommentList;

