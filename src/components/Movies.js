import React, { useState, useEffect } from "react";
import { Results } from "./Results";

// Component which manages the API on the home page
export const Movies = () => {
  let [current_genre, setGenre] = useState(0); // 0 for "All"
  let [current_page, setPage] = useState(1); // Pagination
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle change in genre selection
  const handleChange = (e) => {
    e.preventDefault();
    setGenre(parseInt(e.target.value, 10)); // Update genre
    setPage(1); // Reset page when changing genre
  };

  // Fetch movies based on the current genre and page
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&include_adult=false&include_video=false&language=en-US&page=${current_page}`;

      // If genre is selected, include it in the URL
      if (current_genre > 0) {
        url += `&with_genres=${current_genre}`;
      } else {
        url += "&sort_by=popularity.desc"; // Default sort by popularity if no genre
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
          setError("No results found");
        }
      } catch (err) {
        setError("Failed to fetch data");
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [current_genre, current_page]);

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
            <option value="28">Action</option> {/* Fixed duplicate value */}
            <option value="27">Horror</option>
            <option value="35">Comedy</option>
            <option value="10751">Family</option>
            <option value="878">Sci-Fi</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
          </select>
        </div>

        <h1>Movies</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="result_list">
            {results.length > 0 ? (
              results.map((movie) => (
                <li key={movie.id}>
                  <Results movie={movie} type="home" />
                </li>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </ul>
        )}

        <div className="pagination-buttons">
          {/* Handle pagination (previous/next buttons) */}
          <button className="prev"

            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={current_page === 1}
          >
            Previous
          </button>
          <button className="next" onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};
