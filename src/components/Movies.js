import { React, useState, useEffect } from "react";
import { Results } from "./Results";

export const Movies = () => {
  let [current_genre, setGenre] = useState(1);
  let [current_page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };
  // const handleNextPage= () => {
  //   setPage(current_page + 1);
  //   console.log(current_page)

  // }
  // const handlePrevPage= () => {
  //   setPage(current_page-1)
  //   console.log(current_page)

  // }
  // const handleDisabled = () => {
  //   return (current_page ===1)
  // };

  useEffect(() => {
    fetch(
      `${
        current_genre > 0
          ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&with_genres=${current_genre}&page=${current_page}  `
          : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&include_adult=false&include_video=false&language=en-US&page=${current_page}&sort_by=popularity.desc `
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [current_genre, current_page]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&include_adult=false&include_video=false&language=en-US&page=${current_page}&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [current_page]);
  return (
    <>
      <div className="homepage-container">
        <div className="dropdown">
          <label htmlFor="genre">Choose a genre</label>
          <select
            className="dropdown"
            name="genre"
            id="genre"
            onChange={handleChange}
          >
            <option value="0">All</option>
            <option value="12">Adventure</option>
            <option value="12">Action</option>
            <option value="27">Horror</option>
            <option value="35">Comedy</option>
            <option value="10751">Family</option>
            <option value="878">SciFi</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
          </select>
        </div>

        <h1></h1>
        <ul className="result_list">
          {results.length > 0 ? (
            results.map((movie) => (
              <li key={movie.id}>
                <Results movie={movie} type="home" />
              </li>
            ))
          ) : (
            <h1></h1>
          )}
        </ul>
        {/* <button onClick={()=> handleNextPage()}>Next</button>
      <button disabled={handleDisabled()} onClick={()=> handlePrevPage()}>Prev</button>
      <button  onClick={()=> setPage(1)}>Page 1</button> */}
      </div>
    </>
  );
};
