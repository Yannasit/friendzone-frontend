import React from "react";
import Post from "../components/Post";
import { Container, Row, Col } from "reactstrap";
import Profile from "../components/Profile";

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
      <Row md="3" sm="1">
        <Col>
        <Profile/>
        </Col>
        <Row sm="1">{Post1()}</Row>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
