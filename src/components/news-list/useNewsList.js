import { useSelector } from "react-redux";

export default () => {

  const { news, isLoaded } = useSelector(({ news }) => news);
 
  // use news list hook либо через пропсы


  // console.log(`news`, news);

  return { news, isLoaded };

};
