import { LOAD_NEWS_ITEM_SUCCESS } from "./actionTypes";
import axios from "axios";
import { baseURL } from "../../utils/utils";



/* News Item */
export const requestSignleNews = (id) => async (dispatch) => {
  const singleNewsItem = await axios.get(`${baseURL}/item/${id}.json`);
  dispatch({
    type: LOAD_NEWS_ITEM_SUCCESS, payload: singleNewsItem.data
  });
};



/* Commments */
export function getCommentsByIds(kids) {
  
  const arrayOfKids = kids.map((kid) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`, {
      method: "GET",
    })
  );

  return Promise.all(arrayOfKids)
    .then((allResults) => {
      return Promise.all(allResults.map((result) => result.json()));
    })
    .then((res) => {
      
      let allKidsIds = [];
      res.forEach((item) => {
        allKidsIds = allKidsIds.concat(item?.kids || []);
      });
      
      if (allKidsIds.length === 0) return res;

      return getCommentsByIds(allKidsIds).then((children) => {
        return children.concat(res);
      });

    }).catch((err) => {
      console.error(`Что-то пошло не так: `, err);
    });

}
