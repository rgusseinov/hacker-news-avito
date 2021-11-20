import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestSignleNewsItem } from "../../store/actions";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { newsItems } = useSelector((state) => state.newsItemReducer);
  const singleItem = newsItems[id];
  const { item, isLoaded } = singleItem || {};
  
  useEffect(() => {
    if (singleItem) return;
    dispatch(requestSignleNewsItem(id));
  }, [singleItem]);

  return { item, isLoaded };
};
