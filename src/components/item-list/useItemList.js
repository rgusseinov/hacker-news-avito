import { useSelector } from "react-redux";

export default () => {
  const items = useSelector((state) => state.itemsReducer);
  const itemsArray = Object.values(items);
  return { itemsArray };
};
