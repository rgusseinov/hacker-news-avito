import React from 'react';
// import CommentItem from './comment-item';
import { useSelector } from "react-redux";
import { useParams } from "react-router";

/* import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
 */


/* const buildTree = (comments, postId) => {
  let commentsById = {};

  comments.forEach((comment) => {
    commentsById[comment.id] = comment;
  });

  const rootComments = comments.filter((comment) => {
    return comment.parent?.toString() === postId;
  });


  // console.log(`rootComments`, rootComments);
  // debugger;
  return rootComments.map((item) => buildCommentTree(item, commentsById));
}; */


/* const buildCommentTree = (comment, commentsById) => {
  const res = {};
  res.children = comment?.kids?.map((kidId) =>
    buildCommentTree(commentsById[kidId], commentsById)
  );
  return res;
}; */

function CommentList(){

  const { id } = useParams();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  if (!comments[id]) return null;
  // let { item } = comments[id].item;

  return (
    <div>
      {/* <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={["root"]}
        className={""}
        multiSelect
      >
        {renderComments(tree)}
      </TreeView> */}
    </div>
  );  
}

export default CommentList;
