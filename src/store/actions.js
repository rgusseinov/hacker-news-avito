import { COMMENTS_LOADER_OFF, COMMENTS_LOADER_ON, ITEMS_LOADER_OFF, ITEMS_LOADER_ON, ITEM_ADD, ITEM_LOADER_OFF, ITEM_LOADER_ON, LOAD_COMMENTS, LOAD_ITEMS } from "./actionTypes";

export function loadItems(storyIds){
  return async dispatch => {

    dispatch({ type: ITEMS_LOADER_ON });
    const promises = [];
    for (let i=0; i < storyIds.length; i++){
      promises.push( fetch(`https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`) );
    }

    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(data => {
      dispatch({ type: LOAD_ITEMS, data });
    }).finally(() => {
      dispatch({ type: ITEMS_LOADER_OFF });
    });

  };
}

export function loadItem(id){
  return async dispatch => {

    dispatch({ type: ITEM_LOADER_ON });
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const jsonData = await response.json();

    dispatch({
      type: ITEM_ADD,
      data: jsonData
    });
    dispatch({ type: ITEM_LOADER_OFF });

  };
}

export function loadComments(id, kids){
  return async dispatch => {

    const promises = [];
    for (let i=0; i < kids.length; i++){
      promises.push( fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json`) );
    }
    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(finalData => {
      const payload =  {
        id,
        data: finalData
      };      
      dispatch({ type: LOAD_COMMENTS, payload });
    });

  };
}

export function updateComments(id){
  return async dispatch => {

    dispatch({ type: COMMENTS_LOADER_ON });
    
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const jsonData = await response.json();

    const promises = [];
    const kids = jsonData.kids || [];
    for (let i=0; i < kids.length; i++){
      promises.push( fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json`) );
    }
    Promise.all(promises).then(data => {
      return Promise.all(data.map(result => result.json()));
    }).then(finalData => {
      const payload =  {
        id,
        data: finalData
      };      
      dispatch({ type: LOAD_COMMENTS, payload });
    }).finally(() => {
      dispatch({ type: COMMENTS_LOADER_OFF });
    });

  };
}

