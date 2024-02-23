import axios from "axios";
import { API } from "./constants";

export const getNewAlbums = async () => {
  const data = await axios.get(`${API}/albums/new`);
  return data.data;
};

export const getTopAlbums = async () => {
  const data = await axios.get(`${API}/albums/top`);
  return data.data;
};
