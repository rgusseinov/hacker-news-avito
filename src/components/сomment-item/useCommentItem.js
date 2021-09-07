import { useEffect, useState } from "react";
import { getItemById } from "../../api/api";

export default (commentId) => {

  const [comment, setComment] = useState({});
  const [kidsShowed, setKidsShowed] = useState();
  // Loading

  // console.log(`here`);

  useEffect(() => {
    const getComment = async() => {
      const data = await getItemById(commentId);
      setComment(data);
    };
    getComment();

  }, [commentId]);

  const handleShowSubComments = () => {
    setKidsShowed(true);
  };

  return { comment, handleShowSubComments, kidsShowed};
};