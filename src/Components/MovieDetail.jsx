import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, ListGroupItem, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const MovieDetail = () => {
  //   state = {
  //     details: [],
  //   };
  const params = useParams();

  useEffect(() => {
    getDetail();
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);

  const getDetail = () => {
    fetch(`http://www.omdbapi.com/?apikey=b84f7858&i=${params.movieId}`)
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyNmY2ZTNkZDAwMTQ5NWU0M2UiLCJpYXQiOjE2OTgzMjI3MjYsImV4cCI6MTY5OTUzMjMyNn0.t792lvszvowBQgvfJlQPO9EnIQjIC7V8g34hvfewPAg",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("response was not ok");
        }
      })
      .then((data) => {
        console.log(data, "comments");
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row className="justify-content-center ">
      <Col lg={6}>
        <Card className="bg-dark border-0 ">
          <Row>
            <Col lg={6}>
              <Card.Img
                variant="start"
                src={details.Poster}
                className="w-75 border border-2 border-white-50 rounded-0"
              />
            </Col>
            <Col lg={6}>
              <Card.Body
                className="text-white text-start 
              "
              >
                <Card.Title>{details.Title} </Card.Title>
                <Card.Text>{details.Actors}</Card.Text>

                <Card.Text>{details.Plot}</Card.Text>
                <Card.Text>
                  Imdb Rating {details.imdbRating} {details.imdbVotes}
                </Card.Text>
                <Card.Text>{details.imdbRating}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <ListGroup>
              {comments.map((commento) => (
                <ListGroupItem key={commento._id}>
                  {commento.comment}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default MovieDetail;
