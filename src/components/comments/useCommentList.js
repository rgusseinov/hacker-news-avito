/* import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
// import { requestNewsItemComments } from "../../store/actions";

export default () => {
  const { id } = useParams();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  if (!comments[id]) return null;

  const comment = comments[id];

  useEffect(() => {
  }, [comment]);

  return { comment }
}; */
