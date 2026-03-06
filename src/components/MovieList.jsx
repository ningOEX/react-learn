import React from "react";
import Movie from "./Movie";
import "./Movie.css"

export default function MovieList(props) {
  const movies = props.movies.map((item, i) => <Movie key={i} {...item} />);
  return <ul className="movie_container">{movies}</ul>;
}
