export const baseURL = 'https://hacker-news.firebaseio.com/v0';
export const TIME_INTERVAL = 60000;
export const ITEMS_LIMIT = 20;

export function getLocalDateFormat(time){
  if (!time) return;
  return new Date(time * 1000).toLocaleString();
}

export function textParser(text){
  const parseText = new DOMParser().parseFromString(text, 'text/html');
  return parseText.body.textContent;
}


export const buildTree = (comments, postId) => {
  const commentsById = {};
  
  comments.forEach((comment) => {
    commentsById[comment.id] = comment;
  });
  
  const rootComments = comments.filter((comment) => {
    return comment?.parent?.toString() === postId;
  });

  return rootComments.map((item) => buildCommentTree(item, commentsById));
};

export const buildCommentTree = (comment, commentsById) => {
  const result = {
    id: comment.id.toString(),
    text: comment.text,
    by: comment.by,
    children: comment.kids?.map((kidId) => buildCommentTree(commentsById[kidId], commentsById))
  };
  return result;
};
