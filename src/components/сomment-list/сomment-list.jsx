import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCommentByItemId } from '../../features/items/actions';
import CommentItem from '../сomment-item/сomment-item';


function CommentList(){
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCommentByItemId(id));
  }, []);

  console.log(`id`, id);
 
  const { comments } = useSelector(({ comments }) => comments);
  return (
    <div>
      { comments.kids && comments.kids.map((commentId, key) => {
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

