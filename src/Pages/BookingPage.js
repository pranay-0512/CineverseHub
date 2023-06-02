import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PreFilledForm from "../Components/PreFilledForm";
import Summary from "../Components/Summary";

// 1. it will get each movie details from MovieCard component by the help of useLocation
// 2. it will display the MovieSummary & BookingForm component
// 3. it will pass movie name & summary to MovieSummary component
// 4. it will pass the movie name to the BookingForm component

const BookingPage = () => {
  const { state } = useLocation();
  console.log("Movie data fom useLocation", state);
  const { movie } = state;

  return (
    <Container>
      <Row>
        <Col>
          <Summary
            name={movie.show.name}
            summary={movie.show.summary}
            img={movie.show.image.original}
          />
        </Col>
        <Col className="bookingForm">
          <PreFilledForm name={movie.show.name} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookingPage;
