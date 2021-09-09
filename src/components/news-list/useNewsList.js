import { useSelector } from "react-redux";

export default () => {
  const { news, loading } = useSelector(({ news }) => news);
  return { news, loading };
};
