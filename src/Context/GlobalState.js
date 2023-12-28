import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// this code sets up a global state management system using React context and a provider component

// initial state
const initialState = {
  // Define the initial state for the context. It initializes the watchlist and watched arrays by retrieving them from the localStorage or setting them as empty arrays if they don't exist.

  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
//create context

export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  //actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  return (

    // Render the GlobalContext.Provider with the value prop containing the state and action functions. This makes the state and actions available to any components wrapped with this provider.

    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchlist,
        addToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
