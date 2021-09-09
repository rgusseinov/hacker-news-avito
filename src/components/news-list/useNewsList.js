import { useSelector } from "react-redux";

export default () => {
  const { newsIds, loading } = useSelector(({ news }) => news);
  return { newsIds, loading };
};
