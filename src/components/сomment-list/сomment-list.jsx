import React from 'react';
import CommentItem from '../сomment-item/сomment-item';

function CommentList(){

  return (
    <div>
      <CommentItem
        key={0}
        commentId={0}
      />
    </div>
  );  
}

export default CommentList;
