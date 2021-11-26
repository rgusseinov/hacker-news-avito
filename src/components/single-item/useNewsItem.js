import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestSignleNews } from "../../redux/actions/actions";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { newsItems } = useSelector(state => state.newsItemReducer);
  const singleItem = newsItems[id];
  const { item } = singleItem || {};
  
  useEffect(() => {
    if (singleItem) return;
    dispatch(requestSignleNews(id));
  }, [singleItem]);

  return { item };
};
