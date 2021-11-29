import { Button, 
  Grid, 
  Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useComments from './use-comments';
import { textParser } from '../../shared/utils/utils';
import Loader from '../loader/loader';
import Error from '../error/error';
import classes from './comments.module.css';

function Comments(){
  const { tree, loading, isCommentsFailed, commentsCount, handleRefreshComments  } = useComments();

  const renderComments = (nodes) => {
    if (!nodes) return null;
  
    return (
      <div>
        {nodes.map(node => {
          const parsedText = textParser(node.text);
          return (
            <TreeItem
              key={node.id}
              nodeId={String(node.id)}
              label={
                <div className={classes.commentWrap}>
                  <p className={classes.commentBy}>{node.by}</p>
                  <p className={classes.comment}>{parsedText}</p>
                </div>
              }
            >
              {renderComments(node.children)}
            </TreeItem>
          );
        })}
      </div>
    );
  
  };

  return (
    <Grid item xs={12}>
      {
        loading ? <Loader /> :          
          <>
            <Grid container className={classes.boxWrapper}>
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
            </Grid>
            {
              isCommentsFailed ? <Error /> : (
                <Grid container className={classes.boxWrapper}>
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
                </Grid>)
            }
          </>
      }
    </Grid>
  );
}

export default Comments;
