import React, { useState } from 'react';
import { getNewsPostTime } from '../../shared/utils/time';
import CommentList from './comment-list';

const CommentItem = ({ comment }) => {
  const commentPostTime = getNewsPostTime(comment.time);

  const [kidsShowed, setKidsShowed] = useState(false);
  const toggleComments = () => {
    setKidsShowed(!kidsShowed);
  };

  return <div className="comment">
    <div className="comment-author">
      <span className="name">{comment.by}</span>
      <span className="time">{commentPostTime} ago</span>
    </div>
    <div className="comment-text"
      dangerouslySetInnerHTML={{ __html: comment.text }}>
    </div>
    {
      comment.children?.length > 0 &&
      <span
        onClick={toggleComments}
        className={kidsShowed ? "comment-toggle open" : 'comment-toggle close'}>
        {kidsShowed ? `[-]` : `${comment.children?.length} replies collapsed`}
      </span>
    }
    {
      comment.children && kidsShowed &&
      <CommentList
        commentList={comment.children}
      />
    }
  </div>;
};

export default CommentItem;
