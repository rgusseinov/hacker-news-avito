import axios from "axios";
import { baseURL, ITEMS_LIMIT } from "../utils/utils";

export const getNews = async () => {
  const result = await axios.get(`${baseURL}/topstories.json`);
  const newsIds = result.data.slice(0, ITEMS_LIMIT) || [];
  return newsIds;
};

