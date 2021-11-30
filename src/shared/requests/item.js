import axios from "axios";
import { baseURL } from "./api";

export const getItem = async (newsId) => {
  const response = await axios.get(`${baseURL}/item/${newsId}.json`);
  return response.data;
};
