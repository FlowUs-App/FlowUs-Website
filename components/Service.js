import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import services from "../data/services.json";
import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <div className="bk-service-area section-pb-120">
      <Container>
        <Row>
          {services.map(({ thumb, title, id, content }) => (
            <Col key={id} xs={12} md={4} className={"wow move-up"}>
              <ServiceItem thumb={thumb} title={title} content={content} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Service;
