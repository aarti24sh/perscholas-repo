import React from "react";
import Slider from "react-slick";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {/* Display movies as individual cards */}

        {/* Use Slider for carousel */}
        <Slider {...settings}>
          {/* <div className="movie-container">{renderMovies}</div> */}
          {movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
              <div key={index}>
                <MovieCard data={movie} />
              </div>
            ))
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </Slider>
      </div>
      <div className="show-list">
        <h2>Shows</h2>

        <Slider {...settings}>
          {/* <div className="movie-container">{renderShows}</div> */}
          {shows.Response === "True" ? (
            shows.Search.map((show, index) => (
              <div key={index}>
                <MovieCard data={show} />
              </div>
            ))
          ) : (
            <div className="shows-error">
              <h3>{shows.Error}</h3>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default MovieListing;
