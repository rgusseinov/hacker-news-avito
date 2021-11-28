const requestSingleNews = async () => {
  try {
   
    const singleNewsItem = await axios.get(`${baseURL}/item/${id}.json`);
    dispatch({
      type: LOAD_NEWS_ITEM_SUCCESS, 
      payload: singleNewsItem.data
    });

  } catch {
   
    // dispatch({ type: LOAD_NEWS_ITEM_FAIL });
  }
};
