import { useSelector } from "react-redux";
import { newsSelector } from "../../redux/selectors/reselectors";

export default () => {
  const {news, loading, isFail } = useSelector(newsSelector);
  
  console.log(`isFail`, isFail);

  const newsArray = Object.values(news);
  return {newsArray, loading, isFail};
};
