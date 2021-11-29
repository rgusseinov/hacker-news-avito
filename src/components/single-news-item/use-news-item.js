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
    requestSingleNews();
  }, [singleItem]);

  const requestSingleNews = async () => {
    try {
      dispatch(loadSingleNews(id));
    } catch(e) {
      console.error(`Что-то пошло не так: ${e}`);
    }
  };  

  return { item, isLoaded, isItemsFailed };
};
