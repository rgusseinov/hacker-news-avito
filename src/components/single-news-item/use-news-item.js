import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadSingleNews } from "../../redux/actions/single-news";
import { newsItemSelector } from "../../redux/selectors/news-selector";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const { newsItems, isItemsFailed } = useSelector(newsItemSelector);
  const singleItem = newsItems[id];
  const { item } = singleItem || {};
  
  useEffect(() => {
    if (singleItem) return;
    requestSingleNews();
  }, [singleItem]);

  const requestSingleNews = async () => {
    try {
      setLoading(true);
      dispatch(loadSingleNews(id));
      setLoading(false);
    } catch(e) {
      console.error(`Что-то пошло не так: ${e}`);
    }
  };

  

  return { item, loading, isItemsFailed };
};
