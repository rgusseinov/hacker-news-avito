import React from 'react';
import CommentItem from '../сomment-item/сomment-item';
import useCommentsContent from './useCommentsContent';

// Массив ID'ков
function CommentList(){

  const commentList = useCommentsContent();
  if (!commentList) return null;
  

  return (
    <div>
      { commentList.items && commentList.items.map((commentItem, key) => {
        return (
          <CommentItem
            key={key}
            commentItem={commentItem}
          />);
      })
      }
    </div>
  );  
}

export default CommentList;
