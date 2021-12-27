import { useSelector } from 'react-redux';
import { newsSelector } from '../redux/selectors/news-selector';
import { sortItemsByDate } from '../shared/utils/utils';

const useItemList = () => {
  const { news, loading, isFail } = useSelector(newsSelector);

  const newsArray = Object.values(news);
  const sortedItems = newsArray.slice().sort(sortItemsByDate);

  return { sortedItems, loading, isFail };
};

export default useItemList;
