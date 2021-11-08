import React from 'react';
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classes from './comments.module.css';
import { useParams } from 'react-router';
import useCommentList from './useCommentList';

const buildTree = (comments, postId) => {
  let commentsById = {};

  comments.forEach((comment) => {
    commentsById[comment.id] = comment;
  });

  
  const rootComments = comments.filter((comment) => {
    return comment.parent?.toString() === postId;
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



function CommentList(){

  const { id } = useParams();
  const item = useCommentList();
  console.log(`item`, item);
  const tree = buildTree([], id);

  return (
    <div>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["root"]}
        className={classes.root}
        multiSelect
      >
        {renderComments(tree)}
      </TreeView>
    </div>
  );  
}

export default CommentList;
