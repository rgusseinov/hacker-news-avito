import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestNewsItemComments } from "../../store/actions";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.newsItemCommentReducer);
  
  // console.log(comments[id]);

  useEffect(() => {
    if (comments[id]) return;
    dispatch(requestNewsItemComments(id));
  }, []);

};