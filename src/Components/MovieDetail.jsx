import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

const MovieDetail = () => {
  //   state = {
  //     details: [],
  //   };
  const params = useParams();

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [details, setDetails] = useState([]);
  //   const [comments,setComments]

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
        </Card>
      </Col>
    </Row>
  );
};

export default MovieDetail;
