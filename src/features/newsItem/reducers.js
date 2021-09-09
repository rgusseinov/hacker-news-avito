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