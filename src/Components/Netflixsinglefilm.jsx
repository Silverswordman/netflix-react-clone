import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleFilmCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="h-100 border-0 m-1 "
      onClick={() => {
        navigate(`/Detail/${movie.imdbID}`);
      }}
    >
      <Card.Img variant="top" src={movie.Poster} className="h-75" />
      <Card.Body className="bg-dark text-white ">
        <Card.Title className="text-truncate ">
          {<small>{movie.Title}</small>}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleFilmCard;
