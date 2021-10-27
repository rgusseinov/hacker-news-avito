import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CommentItem from './comment-item';

function CommentList(){
  const { id } = useParams();
  const comments = useSelector((state) => state.commentsReducer);
  const [commentItems, setCommentItems] = useState([]);  
  
  useEffect(() => {
    if (!comments[id]) return;
    setCommentItems(comments[id].items);
  });  

  return (
    <div>
      {
        commentItems.map(item => 
          <CommentItem 
            key={item.id}
            item={item}
          />
        )
      }      
    </div>
  );  
}

export default CommentList;