//This is just for a demonstration purpose of how to use useReducer

import { useReducer } from "react";
import { DataContext } from "./DataContext";
import { getNewAlbums, getTopAlbums } from "../utils/Api";

const INITIAL_STATE = {
  topAlbums: [],
  newAlbums: [],
};

const reducer = async (state, action) => {
  switch (action.type) {
    case "top_albums":
      let top_albums;
      (async function () {
        top_albums = await getTopAlbums();
      })();
      return {
        ...state,
        topAlbums: top_albums,
      };
    case "new_albums":
      let new_albums = await getNewAlbums();
      return {
        ...state,
        newAlbums: new_albums,
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchTopAlbums = () => {
    try {
      dispatch({ type: "top_albums" });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNewAlbums = () => {
    try {
      dispatch({ type: "new_albums" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DataContext.Provider
      value={{
        topAlbums: state.topAlbums,
        newAlbums: state.newAlbums,
        fetchNewAlbums,
        fetchTopAlbums,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
