import { URL } from "../../api/api";

export const requestCommentIds = (id) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED_COMMENT', // Перекликается с ждругим loading'ом в news Item. Нужно исправить.
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {
    // console.log(`item`, item);
    dispatch(setCommentIds(item));
  });

};

export const setCommentIds = (newsCommentIds) => ({
  type: 'SET_COMMENT_IDS',
  payload: newsCommentIds
});



/* export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
      type: 'SET_LOADED',
      payload: false
  })

  axios.get(`/pizzas?${
      category !== null ? `category=${category}` : '' 
  }&_sort=${sortBy.type}&_order=${sortBy.order}`
  ).then(({ data }) => {
      dispatch(setPizzas(data))
  }) 
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
}) */