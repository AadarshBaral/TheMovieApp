import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar_max_width_container">
        <div className="navbar-container">
          <div className="logo">
            {" "}
            <Link to="/">TheMovieApp</Link>
          </div>
          <div>
            <ul className="links">
              <li>
                {" "}
                <Link to="/watchlist">Watchlist</Link>{" "}
              </li>

              <li>
                <Link to="/completed_watching">Completed</Link>
              </li>
              <li>
                {" "}
                <Link style={{ background: "green" }} to="/search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Search
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
