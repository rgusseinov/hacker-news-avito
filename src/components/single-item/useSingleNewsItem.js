// mport { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { requestSignleNewsItem } from "../../store/actions";

export default () => {

  const item = {};
  const isLoaded = true;

  //const { id } = useParams();
  // const dispatch = useDispatch();
  const { newsItems } = useSelector((state) => state.newsItemReducer);
  // const singleNews = newsItems[id];


  /*
  useEffect(() => {
    if (singleNews?.item) return;
    dispatch(requestSignleNewsItem(id));
     
  }, [singleNews]); */

  console.log(`newsItems`, newsItems);

  return { item, isLoaded };
};

/*
  1. Почему singleNews появляется 4 и более раз ?

*/