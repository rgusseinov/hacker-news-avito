import axios from 'axios';
import { baseURL } from '../constants';

export const getTopNews = async (newsLimit) => {
  const result = await axios.get(`${baseURL}/topstories.json`);
  const newsIds = result.data.slice(0, newsLimit) || [];
  return newsIds;
};
