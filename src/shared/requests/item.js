import axios from 'axios';
import { baseURL } from '../constants';

export const getNewsItem = async (newsId) => {
  const response = await axios.get(`${baseURL}/item/${newsId}.json`);
  return response.data;
};
