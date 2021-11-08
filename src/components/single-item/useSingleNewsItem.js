import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestSignleNewsItem } from "../../store/actions";

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { newsItems } = useSelector((state) => state.newsItemReducer);
  const singleNews = newsItems[id];

  
  useEffect(() => {
    if (singleNews?.item) return;
    dispatch(requestSignleNewsItem(id));
    
  }, [singleNews]);  

  return { singleNews };
};
