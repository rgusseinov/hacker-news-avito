/* import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {
  const { id } = useParams();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);

  useEffect(() => {
    console.log(`comments`, comments, id);
  }, []); 

  return { id };
};
 */