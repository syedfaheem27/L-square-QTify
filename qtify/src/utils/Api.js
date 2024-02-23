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

export let ALL_SONGS;

export const getSongs = async () => {
  const data = await axios.get(`${API}/songs`);
  ALL_SONGS = data.data;
  return data.data;
};

export const getGenres = async () => {
  const data = await axios.get(`${API}/genres`);
  return data.data.data;
};
