import React from "react";
import { Card } from "react-bootstrap";

const SingleFilmCard = ({ movie }) => {
  return (
    <Card className="h-100 border-0 m-1 ">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body className="bg-dark text-white ">
        <Card.Title className="text-truncate ">
          {<small>{movie.Title}</small>}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleFilmCard;
