import { useEffect, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useParams } from "react-router";
import { requestSingleNews } from "../../features/newsItem/actions";

export default () => {

  // const [newsItem, setNewsItem] = useState({});
  // const [loading, setLoading] = useState(false);

  const {id} = useParams();
  const dispatch = useDispatch();
  
  const {newsItems} = useSelector(({ newsItems }) => newsItems);
  const singleNews = newsItems[id]; 
 

  useEffect(() => {
    if (singleNews) return;
    dispatch(requestSingleNews(id));

  }, [singleNews]); // loading


  
  
  return singleNews;
};

// singleNews: [id]: underfined
// singleNews: [id]: {item: {}, isLoaded}