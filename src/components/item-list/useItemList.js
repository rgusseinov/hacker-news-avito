import { useSelector } from "react-redux";
import { newsSelector } from "../../store/reselectors";


export default () => {
  const {news, loading} = useSelector(newsSelector);
  
  const newsArray = Object.values(news);
  return {newsArray, loading};
};
