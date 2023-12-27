import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Results } from "./Results";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <div className="watchlist_container">
        <p className="watchlist_header">Your Watchlist</p>
        <div className="hzline"></div>
        <br />
        <br />
        <ul className="result_list">
          {watchlist.length > 0 ? (
            watchlist.map((movie) => <Results movie={movie} type="watchlist" />)
          ) : (
            <h2>No movies in your list</h2>
          )}
        </ul>
      </div>
    </>
  );
}
