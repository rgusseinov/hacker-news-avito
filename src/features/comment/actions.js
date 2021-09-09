import { URL } from "../../api/api";

export const requestCommentIds = (id) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false
  });

  const result = fetch(`${URL}/item/${id}.json?print=pretty`);
  result.then(data => data.json()).then(item => {
    dispatch(setCommentIds(item));
  });

};

export const setCommentIds = (newsItemComments) => ({
  type: 'SET_COMMENT_IDS',
  payload: newsItemComments
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