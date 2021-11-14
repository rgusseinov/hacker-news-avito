import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import classes from './comments.module.css';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Loader from '../loader/loader';
import useComments from './useComments';

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
  
  const { tree, isLoaded, commentsCount, handleRefreshComments  } = useComments();

  return (
    <Grid item xs={12}>
      {
        !isLoaded ? <Loader /> : (
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
          </Grid>)
      }
    </Grid>
  );
}

export default Comments;
