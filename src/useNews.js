import { useSelector } from "react-redux";

export default () => {

  const { news } = useSelector((state) => state.newsReducer);
  const loading = useSelector((state) => state.newsReducer.loading);  

  return { news, loading };
};

