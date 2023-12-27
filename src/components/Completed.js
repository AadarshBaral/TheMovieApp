import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Results } from "./Results";

export default function Completed() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="watchlist_container">
      <p className="watchlist_header">Your accomplishments</p>
      <div className="hzline"></div>
      <br />
      <br />
      <ul className="result_list">
        {watched.length > 0 ? (
          watched.map((movie) => <Results movie={movie} type="watched" />)
        ) : (
          <h2>You have not watched any movie</h2>
        )}
      </ul>
    </div>
  );
}
