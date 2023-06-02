import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";
// given api
const url = "https://api.tvmaze.com/search/shows?q=all";
// fetch api data using axios
const getMovies = async () => {
  try {
    const response = await axios.get(url);
    console.log("response:-", response);
    return response.data;
  } catch (error) {
    console.log("error while getting movies:-", error);
  }
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // call getMovies function once when the component mounts (only one time)
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  console.log("MoviesPage Component:-", movies);

  return (
    // display movie cards
    <Container>
      <Row>
        {movies.map((movie) => {
          return (
            <Col className="mt-5">
              <MovieCard key={movie.show.id} movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesPage;
