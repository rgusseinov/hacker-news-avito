import { useSelector } from "react-redux";
import { newsSelector } from "../../redux/selectors/reselectors";


export default () => {
  const {news, loading} = useSelector(newsSelector);
  
  const newsArray = Object.values(news);
  return {newsArray, loading};
};
