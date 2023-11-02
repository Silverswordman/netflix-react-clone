import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const MovieDetail = () => {
  //   state = {
  //     details: [],
  //   };

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetail = () => {
    fetch(`http://www.omdbapi.com/?apikey=b84f7858&i=tt0241527`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("response was not ok");
        }
      })
      .then((data) => {
        console.log(data, "details");
        setDetails(data);
        console.log(details, "hello");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card>
      <Card.Img variant="top" src={details.Poster} className="w-50" />
      <Card.Body>
        <Card.Title>{details.Title} </Card.Title>
        <Card.Text>{details.Actors}</Card.Text>
        <Card.Text>{details.Plot}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetail;
