import { useMemo } from "react";
import { useSelector } from "react-redux";


export default () => {
  const { stories } = useSelector(({ stories }) => stories);

  const getFilterItems = (stories) => {
    return stories;
  };

  const newsStories = useMemo(() => {
    return getFilterItems(stories);
  }, [stories]);

  return newsStories;
};
