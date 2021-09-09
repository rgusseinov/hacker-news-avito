import { getItemById } from "../../api/api";
import { LOAD_COMMENT_CONTENT_SUCCESS } from '../../features/comment-content/actionTypes';

export const loadCommentsContent = (itemId) => async (dispatch) => {
  const itemData = await getItemById(itemId);
  const commentsContent = [];
  
  for (let itemKid of itemData.kids){
    let kid = await getItemById(itemKid);
    commentsContent.push(kid);
  }

  dispatch({
    type: LOAD_COMMENT_CONTENT_SUCCESS,
    payload: {itemData, commentsContent}
  });

};


/* itemData: {
  "by": "avi_vallarapu",
  "descendants": 14,
  "id": 28346349,
  "kids": [
    28347527,
    28348533,
    28348705,
    28349286,
    28346618
  ],
  "score": 42,
  "time": 1630242127,
  "title": "PG_DBMS_JOB – PostgreSQL extension for Oracle DBMS_JOB compatibility",
  "type": "story",
  "url": "https://www.migops.com/blog/2021/08/27/announcing-pg_dbms_job-in-postgresql-for-oracle-dbms_job-compatibility/"
} 

---

[
  {
    "by": "avi_vallarapu",
    "descendants": 14,
    "id": 28346349,
    "kids": [
      28347527,
    ],
  },
  {
    "by": "avi_vallarapu",
    "descendants": 14,
    "id": 28346349,
    "kids": [
      28347527,
    ],
  },


]



*/

