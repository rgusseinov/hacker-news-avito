import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getItemById } from "../../api/api";
import { loadNewsItems } from "../../features/newsItem/actions";

export default () => {

  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  const newsParams = useParams();
  const dispatch = useDispatch();

  /*   dispatch(loadNewsItems(newsParams.id));


  const newsItems = useSelector(({ newsItems }) => newsItems);

  console.log(newsItems);
 */

  /*   useEffect(() => {
    const requestGetStory = async() => {
      try {
        setLoading(true);
        const data = await getItemById(newsParams.id);
        setNews(data);
        setLoading(false);
      } catch(error) {
        console.log(`Что то пошло не так:`, error);
      }
    };
    requestGetStory();
  }, []);
 */
  //  console.log(`in single news`);

  return { news, loading };

};