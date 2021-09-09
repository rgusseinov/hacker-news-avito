const initialState = {
  commentIds: {},
  isLoaded: false
};

export const commentIds = (state = initialState, action) => {

  switch (action.type){
  case 'SET_COMMENT_IDS':
    return {
      commentIds: {
        ...state.commentIds,
        [action.payload.id]: {
          item: action.payload,
        },
      },
      isLoaded: true
    };
    
  case 'SET_LOADED': 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }


  /*   if (action.type === LOAD_COMMENT_SUCCESS){
    return {
      commentIds: {
        ...state.commentIds,
        [action.payload.id]: {
          items: action.payload.kids,
        },
      },
    };
  }  
  return state; */


};


/*


const initialState = {
  newsItems: {},
  isLoaded: false
};

export const newsItems = (state = initialState, action) => {

  switch (action.type){
  case 'SET_NEWS_ITEMS':
    return {
      newsItems: {
        ...state.newsItems,
        [action.payload.id]: {
          item: action.payload,
        },
      },
      isLoaded: true
    };
    
  case 'SET_LOADED': 
    return {
      ...state,
      isLoaded: action.payload
    };

  default: return state;
  }

};


/* 
const initialState = {
  items: [],
  isLoaded: false
}

const pizzas = (state = initialState, action) => {

  switch (action.type){
      case 'SET_PIZZAS' : 
      return {
          ...state,
          items: action.payload,
          isLoaded: true
      }
      
      case 'SET_LOADED' : 
      return {
          ...state,
          isLoaded: action.payload
      }
      default: return state

  }
}

export default pizzas

*/
