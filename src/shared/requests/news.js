import axios from "axios";
import { ITEMS_LIMIT } from "../constants";
import { baseURL } from "./api";

export const getNews = async () => {
  const result = await axios.get(`${baseURL}/topstories.json`);
  const newsIds = result.data.slice(0, ITEMS_LIMIT) || [];
  return newsIds;
};
