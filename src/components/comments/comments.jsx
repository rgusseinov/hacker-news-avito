import { Grid } from '@material-ui/core';
import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useComments from '../../hooks/use-comments';
import Loader from '../loader/loader';
import Error from '../error/error';
import '../../scss/components/comments.sass';

const Comments = () => {
  const {
    tree,
    loading,
    isCommentsFailed,
    commentsCount,
    handleRefreshComments
  } = useComments();

  const renderComments = (nodes) => {
    if (!nodes) return null;

    return (
      <div className="comments-row">
        {nodes.map((node) => {
          return (
            <TreeItem
              key={node.id}
              nodeId={String(node.id)}
              label={
                <div className="comments-inner">
                  <p>
                    By <span>{node.by}</span>
                  </p>
                  <p dangerouslySetInnerHTML={{ __html: node.text }}></p>
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="comments-header">
            <div>
              <h2>{commentsCount} Comments</h2>
            </div>
            <div>
              <button className="button" onClick={handleRefreshComments}>
                Refresh
              </button>
            </div>
          </div>
          {isCommentsFailed ? (
            <Error />
          ) : (
            <div className="comments-body">
              <div className="comments-row">
                <TreeView
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  defaultExpanded={['root']}
                  multiSelect
                >
                  {renderComments(tree)}
                </TreeView>
              </div>
            </div>
          )}
        </>
      )}
    </Grid>
  );
};

export default Comments;
