import { useState } from 'react';
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
import { buildTree } from '../../utils/utils';

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
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  const singleComment = comments[id] || {};
  const { item, isLoaded } = singleComment;

  useEffect(() => {
    dispatch(loadComments(id));
  }, []);

  const handleRefreshComments = () => {
    setLoading(true);
    dispatch(loadComments(id));
    setLoading(false);
  };

  console.log(`isLoaded`, isLoaded);

  if (!item) return null;
 
  const tree = buildTree(item, id);
  const commentsCount = item.length;
 

  return (
    <Grid item xs={12}>
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
          {
            !loading ? (
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
              </Grid>) :  <Loader />
          }
        </>
      </Grid>
    </Grid>
  );
}

export default Comments;
