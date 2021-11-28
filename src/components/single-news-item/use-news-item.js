import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LOAD_NEWS_ITEM_FAIL, LOAD_NEWS_ITEM_SUCCESS } from "../../redux/actions/actionTypes";
import { newsItemSelector } from "../../redux/selectors/reselectors";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const { newsItems, isItemsFailed } = useSelector(newsItemSelector);
  const singleItem = newsItems[id];
  const { item } = singleItem || {};
  
  useEffect(() => {
    if (singleItem) return;
    requestSingleNews();
  }, [singleItem]);

  const requestSingleNews = () => {
    try {

    } catch {

    }
  }

/*   try {
    setLoading(true);
    const singleNewsItem = await axios.get(`${baseURL}/item/${id}.json`);
    dispatch({
      type: LOAD_NEWS_ITEM_SUCCESS, 
      payload: singleNewsItem.data
    });
    setLoading(false);
  } catch {
    setLoading(false);
    dispatch({ type: LOAD_NEWS_ITEM_FAIL });
  } */


  return { item, loading, isItemsFailed };
};
