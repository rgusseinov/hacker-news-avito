export const URL = 'https://hacker-news.firebaseio.com/v0';

export async function getNewsIds(){
  const result = await fetch(`${URL}/newstories.json`);
  if (!result.ok) return Promise.reject(`Что то пошло не так ${result}`);
  return result.json();

}

export async function getItemById(id){
  const result = await fetch(`${URL}/item/${id}.json?print=pretty`);
  if (!result.ok) return Promise.reject(`Что то пошло не так ${result}`);
  return result.json();
}
