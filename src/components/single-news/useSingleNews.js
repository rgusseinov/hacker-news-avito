import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { useParams } from "react-router";
import { getItemById } from "../../api/api";
import { loadNewsItems } from "../../features/newsItem/actions";

export default () => {

  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const requestNewsInfo = async () => {
      const data = await getItemById(id);

      setNews(data);
      dispatch(loadNewsItems(id, data));
      
    };
    requestNewsInfo();
  }, []);
  
  return { news, loading };
};
