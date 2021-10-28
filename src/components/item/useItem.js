import { useEffect, useState } from "react";
import { getStoryItemById } from "../../api/api";


export default function(id){

  const [item, setItem] = useState({});

  useEffect(() => {
    const requestStoryItem = async() => {
      const result = await getStoryItemById(id);
      setItem(result);
    };
    requestStoryItem();

  }, [id]); 

  return item;

}