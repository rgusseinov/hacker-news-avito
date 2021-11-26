import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useComments from './useComments';
import { textParser } from '../../utils/utils';
import Loader from '../loader/loader';

function Comments(){
  const { tree, loading, commentsCount, handleRefreshComments  } = useComments();

  const renderComments = (nodes) => {
    if (!nodes) return null;
  
    return (
      <div>
        {nodes.map((node, index) => {
          const parsedText = textParser(node.text);
          return (
            <TreeItem
              key={index}
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
        loading ? <Loader /> : null
      }
      {
        <Grid container className={classes.boxWrapper}>    
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
          </>
        </Grid>
      }
    </Grid>
  );
}

export default Comments;
