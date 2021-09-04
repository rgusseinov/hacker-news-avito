import { useSelector } from "react-redux";

export default () => {

  const { news } = useSelector(({ news }) => news);
  const { isNewsLoaded } = useSelector(({ news }) => news);
  // use news list hook либо через пропсы


  // console.log(`news`, news);

  return { news, isNewsLoaded };

};
