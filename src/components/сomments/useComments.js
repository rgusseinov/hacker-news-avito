import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {

  const dispatch = useDispatch();  
  const { id } = useParams();
  const {newsItems} = useSelector(({ newsItems }) => newsItems);

  const findNewsItem = newsItems.find(item => item.id == id);
  // console.log(`findIndex`, findNewsItem);
    
  /*   newsItems.forEach(element => {
    console.log(element);
  }); */

  return { findNewsItem };
};
