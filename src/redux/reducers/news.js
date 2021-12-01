import {
  LOAD_NEWS_FAILURE,
  LOAD_NEWS_START,
  LOAD_NEWS_SUCCESS
} from '../actions/types';

const initialState = {
  news: {},
  loading: false,
  isFail: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS_START:
      return {
        ...state,
        loading: true,
        isFail: false
      };
    case LOAD_NEWS_SUCCESS: {
      const itemsObject = {};
      for (let i = 0; i < action.payload.length; i++) {
        itemsObject[action.payload[i].id.toString()] = action.payload[i];
      }
      return {
        loading: false,
        isFail: false,
        news: {
          ...itemsObject
        }
      };
    }

    case LOAD_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        isFail: true
      };
    default:
      return state;
  }
};

export default newsReducer;
