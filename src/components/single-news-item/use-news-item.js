import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadSingleNews } from "../../redux/actions/single-news";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { newsItems, isItemsFailed } = useSelector(state => state.newsItemReducer);
  const singleItem = newsItems[id];
  const { item, isLoaded } = singleItem || {};
  console.log(`isLoaded`, isLoaded); 
 
  useEffect(() => {
    if (singleItem) return;
    dispatch(loadSingleNews(id));
  }, [singleItem]);


  return { item, isLoaded, isItemsFailed };
};
