import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {

  const { id } = useParams();
  // const dispatch = useDispatch();
  const [commentList, setCommentList] = useState([]);
  const { commentsContent } = useSelector(({ commentsContent }) => commentsContent);
  const commentItem = commentsContent[id];

  useEffect(() => {
    if (commentItem) return;
    setCommentList(commentItem);
    // dispatch(loadCommentIds(id));    
    
  }, []); // singleNews in state change
 
  
  console.log(`commentItem`, commentList);
  
  return commentList;
};