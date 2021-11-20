import { useSelector } from "react-redux";

export default () => {

  const news = useSelector((state) => state.newsReducer);
  return news;
};

