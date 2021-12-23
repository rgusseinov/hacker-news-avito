import newsItemReducer from "./news-item";
import { addCommentsSuccess } from "../actions/comments";

it(`<newsItemReducer /> Test loading comments for single news`, () => {
  
  const id = 29629379;
  const commentList = [{
      "by": "mlyle",
      "id": 29659264,
      "parent": 29659072,
      "text": "people will find its smell and taste after it is cooked?",
      "time": 1640241237,
      "type": "comment"
    },
    {
      "by": "actually_a_dog",
      "id": 29659253,
      "parent": 29659072,
      "text": "It could have been given to many people over the years, if it was administered to multiple people at once.",
      "time": 1640241133,
      "type": "comment"
    },
    {
      "by": "cbfrench",
      "id": 29659132,
      "parent": 29658614,
      "text": "Who got a new Baofeng for Christmas and are now plaguing the local repeater?",
      "time": 1640239527,
      "type": "comment"
    }];

  const initialState = {
    newsItems: {},
    comments: commentList,
  
    isItemsFailed: false,
    isCommentsFailed: false
  };

  const payload = { id, item: commentList };
  const action = addCommentsSuccess(payload);
  const newsItemState = newsItemReducer(initialState, action);
  const arrayOfComments = Object.values(newsItemState.comments[id]);

  expect(arrayOfComments.length).toEqual(3);
  
});
