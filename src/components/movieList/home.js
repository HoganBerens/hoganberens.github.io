import React, { useCallback, useEffect, useState } from "react";
import "./home.css";
import { popular } from "./utils";
import Header from "./header";
import FavoriteMovies from "./favoriteMovies";
import PopularMovies from "./popularMovies";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [favorited, setFavorited] = useState([]);
  const [hasFavorited, setHasFavorited] = useState(false);

  let favoriteHandler = useCallback(
    (movie, event) => {
      event.preventDefault();
      setHasFavorited(true);
      let movieIndex = -1;
      let movieList = favorited.slice();

      for (let index = 0; index < movieList.length; index++) {
        if (movie.id === movieList[index].id) {
          movieIndex = index;
          break;
        }
      }
      if (movieIndex > -1) {
        movieList.splice(movieIndex, 1);
      } else {
        movieList.push(movie);
      }
      setFavorited(movieList);
    },
    [favorited]
  );

  useEffect(() => {
    fetch(popular)
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <Header />
      {}
      <FavoriteMovies favorited={favorited} favoriteHandler={favoriteHandler} />
      <div>No favorite movies yet</div>
      <PopularMovies
        popularMovies={popularMovies}
        favoriteHandler={favoriteHandler}
      />
    </div>
  );
};
export default Home;
