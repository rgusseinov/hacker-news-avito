import { useSelector } from "react-redux";

export default () => {
  const items = useSelector((state) => state.itemReducer);
  const loading = useSelector((state) => state.itemReducer.loading);

  return { items, loading };
};
