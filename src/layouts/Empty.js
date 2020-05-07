import React from "react";
import { Container, Row, Col } from "shards-react";

const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;
