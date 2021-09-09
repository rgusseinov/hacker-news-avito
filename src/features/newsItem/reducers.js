import { LOAD_NEWS_ITEM_START, LOAD_NEWS_ITEM_SUCCESS } from "./actionTypes";

const initialState = {
  newsItems: {},
  isLoaded: false,
};

export const newsItems = (state = initialState, action) => {

  if (action.type === LOAD_NEWS_ITEM_START){
    return {
      ...state,
      isLoaded: false
    };
  }

  if (action.type === LOAD_NEWS_ITEM_SUCCESS){
    return {
      newsItems: {
        ...state.newsItems,
        [action.payload.id]: {
          item: action.payload,
          isLoaded: true
        },
      },
    };
  }  
  

  return state;
};


/*   [id]: {
          item: {
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8863,
            "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
            "score" : 111,
            "time" : 1175714200,
            "title" : "My YC app: Dropbox - Throw away your USB drive",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
          },
          isLoading: false
  }
   */
