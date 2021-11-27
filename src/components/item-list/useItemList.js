import { useSelector } from "react-redux";
import { newsSelector } from "../../redux/selectors/reselectors";

const useItemList = () => {
  const {news, loading, isFail } = useSelector(newsSelector);

  const newsArray = Object.values(news);
  return {newsArray, loading, isFail};
};

export default useItemList;

