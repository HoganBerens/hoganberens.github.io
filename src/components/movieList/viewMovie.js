import React, { useEffect, useState } from "react";
import { api_key, imagePath, videoPath } from "./utils";
import "./viewMovie.css";
import { Link } from "react-router-dom";
import Header from "./header";

const ViewMovie = () => {
  const [clickedMovie, setClickedMovie] = useState({});

  const trailerHandler = () => {
    fetch(`${videoPath}${clickedMovie.id}/videos?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        let trailer = data.results.find((movie) => movie.name === "Official Trailer");

        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      });
  };

  useEffect(() => {
    fetch(`${videoPath}${window.location.search.replace("?id=", "")}?api_key=${api_key}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClickedMovie(data);
      });
  }, []);
  return (
    <div className="view-movie-container">
      <Header />
      <div className="viewMovie-wrapper">
        <img className="moviePoster" src={`${imagePath}${clickedMovie.poster_path}`} />
        <div className="viewMovie-childrenWrapper">
          <h1 className="view-movie-title">{clickedMovie.title}</h1>
          <div className="viewMovie-description">
            <b>Description: </b>
            {clickedMovie.overview}
          </div>
          <div className="viewMovie-date">
            <b>Release Date: </b>
            {clickedMovie.release_date}
          </div>
          <div className="viewMovie-rating">
            <b>Rating: </b>
            {clickedMovie.vote_average}
          </div>
          <div className="viewMovie-trailer" onClick={trailerHandler}>
            Watch Trailer
          </div>
        </div>
      </div>
      <Link className="viewMovie-backButton" to={`/movieList`}></Link>
    </div>
  );
};

export default ViewMovie;
