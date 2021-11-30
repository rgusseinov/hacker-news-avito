import axios from "axios";
import { baseURL } from "./api";

export const getItem = async (newsId) => {
  const response = await axios.get(`${baseURL}/item1/${newsId}.json`);
  // if (!response.ok) Promise.reject(`Что-то пошло не так`, response.statusText);
  return response.data;
};
