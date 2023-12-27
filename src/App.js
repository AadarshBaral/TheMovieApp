import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Completed from "./components/Completed";
import Watchlist from "./components/Watchlist";
import "./App.css";
import { Movies } from "./components/Movies";
import { GlobalProvider } from "./Context/GlobalState";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Movies />}></Route>
            <Route path="/completed_watching" element={<Completed />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
            <Route path="/movie_detail" element={<MovieDetails />}></Route>
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
