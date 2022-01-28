import React from "react";
import Post from "../components/Post";
import { Container, Row, Col } from "reactstrap";
function Home() {
  function Post1() {
    return [...new Array(20)].map(() => {
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
      <Row md="3" sm="3">
        <Col><Post/></Col>
        <Row sm="1">{Post1()}</Row>
        <Col><Post/></Col>
      </Row>
    </Container>
  );
}

export default Home;
