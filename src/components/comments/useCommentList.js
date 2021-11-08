import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {
  const { id } = useParams();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  if (!comments[id]?.item) return null;
  const { item } = comments[id].item;
  
  console.log(`item`, item);

  useEffect(() => {
    if (!comments[id]) return;
  }, [item]);  
  
  return item;
};
