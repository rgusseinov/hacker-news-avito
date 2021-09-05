import { useEffect, useState } from "react";
import { getItemById } from "../../api/api";

export default (newsItemId) => {

  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestGetStory = async() => {
      setLoading(true);
      const data = await getItemById(newsItemId);
      if (data) {
        setStory(data);
      }
      setLoading(false);
    };
    requestGetStory();
  }, [newsItemId]);

 
  return {story, loading};

};
