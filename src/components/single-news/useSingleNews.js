import { useEffect, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useParams } from "react-router";
import { getItemById } from "../../api/api";
import { requestSingleNews } from "../../features/newsItem/actions";

export default () => {

  const [newsItem, setNewsItem] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  
  const { newsItems } = useSelector(({ newsItems }) => newsItems);
  // console.log(`currentNewsIndex`, newsItems[id]);
  const singleNews = newsItems[id];

  console.log(`newsItems`, newsItems);
  
  // singleNews: [id]: underfined
  // singleNews: [id]: {item: {}, isLoaded}

  useEffect(() => {
  /*     const requestNewsInfo = async () => {
      const data = await getItemById(id);
      setNewsItem(data);
    }; */
    if (singleNews) return;
    dispatch(requestSingleNews(id));
 
    
    

    /*  if (!currentNewsIndex[1]){
      requestNewsInfo();
    } else {
      setNewsItem(currentNewsIndex[1]);
    } */
    

  }, [singleNews]); // loading
  
  

  return singleNews;
};
