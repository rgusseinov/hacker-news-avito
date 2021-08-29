import React, { useEffect, useState } from 'react';
import { getItemById } from '../../api/api';

function CommentItem({ commentId }){
  
  const [comment, setComment] = useState({});
  useEffect(() => {
    const requestGetComment = async() => {
      const data = await getItemById(commentId);
      setComment(data);
    };
    requestGetComment();

  }, [commentId]);

  // const commentDate = new Date(comment.time * 1000);
  let doc = new DOMParser().parseFromString(comment.text, 'text/html');

  return(
    <div>
      <span> { comment.by } posted on 10.10.2021 14:55:20 | </span>
      <p>
        { doc.body.textContent }
      </p>
      <hr />
    </div>
  );
}

export default CommentItem;

