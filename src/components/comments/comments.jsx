import { Button, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { loadComments } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Loader from '../loader/loader';


const buildTree = (comments, postId) => {
  let commentsById = {};

  comments.forEach((comment) => {
    // console.log(`comment`, comment);
    commentsById[comment.id] = comment;
  });

  
  const rootComments = comments.filter((comment) => {
    return comment?.parent?.toString() === postId;
  });

  return rootComments.map((item) => buildCommentTree(item, commentsById));
};

const buildCommentTree = (comment, commentsById) => {
  const res = {
    id: comment.id.toString(),
    text: comment.text,
    by: comment.by,
  };
  
  res.children = comment.kids?.map((kidId) =>
    buildCommentTree(commentsById[kidId], commentsById)
  );
  return res;
};


const renderComments = (nodes) => {
  if (!nodes) return null;

  return (
    <div>
      {nodes.map((node, index) => (
        <TreeItem
          key={index}
          nodeId={String(node.id)}
          label={
            <div className={classes.commentWrap}>
              <p className={classes.commentBy}>{node.by}</p>
              <p
                // fixme: it's not safe but come on, it's a test task for junior dev
                dangerouslySetInnerHTML={{ __html: node.text }}
                className={classes.comment}
              />
            </div>
          }
        >
          {renderComments(node.children)}
        </TreeItem>
      ))}
    </div>
  );

};



function Comments(){
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  const singleComment = comments[id] || {};
  const { item, isLoaded } = singleComment;
  

  useEffect(() => {
    dispatch(loadComments(id));
  }, []);

  if (!item) return null;
  console.log(`item`, singleComment);
  const tree = buildTree(item, id);
  const commentsCount = item.length;

  return (
    <Grid item xs={12}>
      <Grid container className={classes.boxWrapper}>
        { 
          isLoaded ? (
            <>
              <Grid item xs={10}>
                <Typography variant="h5"> Comments { commentsCount } </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<RefreshIcon />}
                  onClick={() => {}}
                > Refresh </Button>
              </Grid>
              <Grid item xs={12}>
                <TreeView
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  defaultExpanded={["root"]}
                  className={classes.root}
                  multiSelect
                >
                  {renderComments(tree)}
                </TreeView>
              </Grid>
            </>) : <Loader />          
        }
      </Grid>
    </Grid>
  );
}

export default Comments;
