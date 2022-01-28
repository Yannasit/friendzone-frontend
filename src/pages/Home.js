import React from "react";
import Post from "../components/Post";
import Profile from "../components/Profile";
import { Container, Row, Col } from "reactstrap";
function Home() {
  function Post1() {
    return [...new Array(1)].map(() => {
      return (
        <Col>
          <Post />
          
        </Col>
      );
    });
  }
  return (
    <Container>
      <p>HomePage</p>
      <Row md="3" sm="1">
        <Col><Profile/></Col>
        <Row sm="1">{Post1()}</Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Home;
