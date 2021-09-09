import { useEffect, useState } from "react";
import { getItemById } from "../../api/api";

export default (newsItemId) => {

  const [newsItem, setNewsItem] = useState({});

  useEffect(() => {
    const requestGetNewsItem = async() => {
      const data = await getItemById(newsItemId);
      if (data) setNewsItem(data);
    };
    requestGetNewsItem();
  }, [newsItemId]);
 
  return newsItem;
};
