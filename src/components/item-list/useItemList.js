import { useSelector } from "react-redux";

export default () => {
  const news = useSelector((state) => state.newsReducer);
  const newsArray = Object.values(news);
  return { newsArray };
};
