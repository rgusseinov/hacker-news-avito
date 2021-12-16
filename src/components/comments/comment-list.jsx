import React from 'react';
import CommentItem from "./comment-item";

function CommentList({ commentList }) {
  return (
    <div className="comments-wrap">
      {
        commentList.map(comment => {
          return <CommentItem
            key={comment.id}
            comment={comment}
          />;
        })
      }
    </div>
  );
}

export default CommentList;
