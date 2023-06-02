import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// a single movie card component

const MovieCard = (props) => {
  const { movie } = props;
  // console.log("MovieCard Component:-", movie);

  const navigate = useNavigate();

  function handleClick() {
    // redirect to the movie booking page
    let movieId = movie.show.id;
    navigate(`/bookmovie/${movieId}`, { state: { movie } });
  }

  return (
    // component for a single movie card
    <>
      <Card
        style={{
          width: "18rem",
          background: "#1f1e22",
          borderRadius: "20px",
          maxHeight: "35rem",
        }}
      >
        <Card.Img
          variant="top"
          src={movie.show.image.original}
          style={{ maxHeight: "20rem", borderRadius: "20px" }}
        />
        <Card.Body className="card-body">
          <Card.Title className="card-body-title">{movie.show.name}</Card.Title>
          <Card.Text className="card-body-text">
            Genre:{" "}
            {movie.show.genres.map((genre) => (
              <span key={genre}>{genre} </span>
            ))}
            <br />
            Language: {movie.show.language}
            <br />
            Status: {movie.show.status}
          </Card.Text>

          <Button className="button" onClick={handleClick}>
            More details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
