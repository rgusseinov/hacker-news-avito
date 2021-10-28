export async function getTopStories(){
  const request = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
  if (!request.ok) return Promise.reject(`Что то пошло не так ${request}`);
  return await request.json();
}

export async function getStoryItemById(id){
  const request = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  if (!request.ok) return Promise.reject(`Что то пошло не так ${request}`);
  return await request.json();
}
