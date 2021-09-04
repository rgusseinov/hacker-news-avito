const URL = 'https://hacker-news.firebaseio.com/v0';

export async function getNewStories(){
  const result = await fetch(`${URL}/newstories.json`);
  if (!result.ok) return Promise.reject(`Что то пошло не так ${result}`);
  return result.json();  
}

export async function getItemById(id){
  const result = await fetch(`${URL}/item/${id}.json?print=pretty`);
  if (!result.ok) return Promise.reject(`Что то пошло не так ${result}`);
  return result.json();
}

export async function getSubCommentsById(commentIds){
  const commentList = [];
  for (let commentId of commentIds){
    const data = await getItemById(commentId);
    commentList.push(data);
  }
  return commentList;
}
