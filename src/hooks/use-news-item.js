import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  addNewsItemSuccess,
  addNewsItemFailure
} from '../redux/actions/single-news';
import { newsItemSelector } from '../redux/selectors/news-item-selector';
import { getNewsItem } from '../shared/requests/item';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const { newsItems, isItemsFailed } = useSelector(newsItemSelector);
  const singleItem = newsItems[id];
  const { item } = singleItem || {};

  useEffect(() => {
    if (singleItem) return;
    requestSignleNews();
  }, [singleItem]);

  const requestSignleNews = async () => {
    try {
      const item = await getNewsItem(id);
      dispatch(addNewsItemSuccess(item));
    } catch {
      dispatch(addNewsItemFailure());
    } finally {
      setLoading(false);
    }
  };

  return { item, loading, isItemsFailed };
};
