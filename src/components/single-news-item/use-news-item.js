import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addNewsItemSuccess, addNewsItemFailure } from "../../redux/actions/single-news";
import { newsItemSelector } from "../../redux/selectors/news-item-selector";
import { getItem } from "../../shared/requests/item";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { newsItems, isItemsFailed } = useSelector(newsItemSelector);
  const singleItem = newsItems[id];
  const { item } = singleItem || {};
 
  useEffect(() => {
    if (singleItem) return;
    requestSignleNews();
  }, [singleItem]);

  const requestSignleNews = async () => {
    try {
      setLoading(true);
      const item = await getItem(id);
      dispatch(addNewsItemSuccess(item));
      setLoading(false);
    } catch {
      setLoading(false);
      dispatch(addNewsItemFailure());
    }
  };

  return { item, loading, isItemsFailed };
};
