import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useComments from './useComments';
import { useParams } from 'react-router';



const buildTree = (comments, postId) => {
  let commentsById = {};

  comments.forEach((comment) => {
   
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
  const {commentsCount, handleRefreshComments} = useComments();
  const tree = buildTree([], id);

  return (
    <Grid item xs={12}>
      <Grid container className={classes.boxWrapper}>
        { 
          commentsCount ? (
            <>
              <Grid item xs={10}>
                <Typography variant="h5"> Comments { commentsCount } </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<RefreshIcon />}
                  onClick={handleRefreshComments}
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
            </>) : null          
        }
      </Grid>
    </Grid>
  );
}

export default Comments;
