import { useSelector } from "react-redux";

const useItemList = () => {
  const { news, loading, isFail } = useSelector(state => state.newsReducer);
    
  const newsArray = Object.values(news);
  return { newsArray, loading, isFail };
};

export default useItemList;

