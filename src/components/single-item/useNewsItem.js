import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestSignleNews } from "../../redux/actions/actions";
import { newsItemSelector } from "../../redux/selectors/reselectors";


export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { newsItems } = useSelector(newsItemSelector);
  const singleItem = newsItems[id];
  const { item, isLoaded } = singleItem || {};
  
  useEffect(() => {
    if (singleItem) return;
    dispatch(requestSignleNews(id));
  }, [singleItem]);

  return { item, isLoaded };
};
