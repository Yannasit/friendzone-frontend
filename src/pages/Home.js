import React from "react";
import Post from "../components/Post";
import { Container, Row, Col } from "reactstrap";
function Home() {
  function Post1() {
    return [...new Array(2)].map(() => {
      return (
        <Col>
          <Post color="red" />
        </Col>
      );
    });
  }
  return (
    <Container>
      <p>HomePage</p>
      <Row md="3" sm="1">
        <Col>
          <Post color="pink" />
        </Col>
        <Row sm="1">{Post1()}</Row>
        <Col>
          <Post color="purple" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
