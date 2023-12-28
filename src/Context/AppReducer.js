//manages the state related to a movie watchlist,
// allowing user to add movies to the watchlist,
// remove them, and move them to a watched list.

export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      const alreadyWatched = state.watched.some(
        (movie) => movie.id === action.payload.id
      );
      if (!alreadyWatched) {
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload.id
          ),
          watched: [action.payload, ...state.watched],
        };
      }
    default:
      return state;
  }
};
