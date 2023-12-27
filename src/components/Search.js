import React, { useState } from "react";
import { Results } from "./Results";

export default function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search A Movie"
            value={input}
            onChange={handleChange}
          />
        </div>
        <div className="search_results">
          <div className="watchlist_container">
            <h1>Results</h1>
            <br />
            <div className="hzline"></div>
            <br />
            <br />
            {results.length > 0 && (
              <ul className="result_list">
                {results.map((movie) => (
                  //When mapping through stuff on react, we have to give everytyhing a unique key
                  <li key={movie.id}>
                    <Results movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
