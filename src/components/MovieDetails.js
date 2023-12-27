import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
export const MovieDetails = (props) => {
  const {
    addMovieToWatchList,
    removeMovieFromWatchlist,
    addToWatched,
    watchlist,
  } = useContext(GlobalContext);

  const location = useLocation();
  const {
    title,
    release_date,
    image,
    poster,
    rating,
    vote_average,
    total_ratings,
    vote_count,
    description,
    id,
  } = location.state;

  const inWatchlist = watchlist.find((o) => o.id === id) ? true : false;
  return (
    <>
      <div className="movie-container">
        <div className="movie-detail-card">
          <img
            className="movie-banner"
            src={`https://image.tmdb.org/t/p/w200/${image}`}
            alt=""
          />
          <div className="image-overlay"></div>
          <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="" />
          </div>
          <div className="ratings">
            <div className="imdb_logo">
              <img src="./imdb.png" alt="" />

              <h2>{rating}</h2>
              <div
                style={{
                  background: "white",
                  color: "black",
                  marginLeft: "5px",
                }}
                className="btn"
              >
                {inWatchlist ? "In watchlist" : ""}
              </div>
            </div>
          </div>
          <div className="info-area">
            <div className="info-text-area">
              <h1 className="movie-title">{title}</h1>

              <h3>{release_date.substring(0, 4)}</h3>

              <p className="movie-desc">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* {title},<p>{release_date.substring(0, 4)}</p>
      {parseFloat(rating.toFixed(1))}
      {total_ratings}
      <img
        src={`https://image.tmdb.org/t/p/w200/${poster}`}
        alt={`${poster} Poster`}
      />
      <img
        src={`https://image.tmdb.org/t/p/w200/${image}`}
        alt={`${image} Poster`}
      />
      <br />
      {description} */}
    </>
  );
};
