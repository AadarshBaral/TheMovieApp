import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Link } from "react-router-dom";
// import defaultimage from './defaultimage.jpg'
export const Results = ({ movie, type }) => {
  const {
    addMovieToWatchList,
    removeMovieFromWatchlist,
    addToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  console.log(watched);

  const inWatched = watched.find((o) => o.id === movie.id) ? true : false;

  return (
    <>
      <div className="movie_card_container">
        <div className="card">
          <div className="image">
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                alt={`${movie.title} Poster`}
              />
            ) : (
              <img
                className="def_image"
                src="/defaultimage.jpg"
                alt={`${movie.title} Poster`}
              />
            )}
          </div>
          <div className="info">
            <Link
              to="/movie_detail"
              state={{
                title: movie.title,
                release_date: movie.release_date,
                image: movie.backdrop_path,
                rating: movie.vote_average,
                total_ratings: movie.vote_count,
                description: movie.overview,
                poster: movie.poster_path,
                id: movie.id,
              }}
            >
              <p>{movie.title.substring(0, 40)}</p>
            </Link>
            <p>
              {movie.release_date ? movie.release_date.substring(0, 4) : "0000"}
            </p>

            {type !== "watchlist" ? (
              <div className="buttons">
                <button
                  className="btn"
                  disabled={watchlistDisabled}
                  onClick={() => addMovieToWatchList(movie)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Watchlist
                </button>
              </div>
            ) : (
              <div className="buttons">
                <button
                  className="btn"
                  onClick={() => removeMovieFromWatchlist(movie.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  Remove
                </button>

                <button
                  disabled={inWatched}
                  className="btn"
                  onClick={() => addToWatched(movie)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Add to watched
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
