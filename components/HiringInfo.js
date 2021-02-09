import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hire from "../data/hire.json";
import IconBoxItem from "../components/IconBoxItem";

function HiringInfo() {
  return (
    <div className="bk-service-area section-ptb-xl hiringPage">
      <Container>
        <Row>
          <Col xs={12}>
            <Col xs={12}>
              <div className={`section-title ${"text-center"} `}>
                <h3 className="textColorWhite">
                  WHAT <span className="lightBlueTextColor">WE</span> DO
                </h3>
                <h2 className="textColorWhite">
                  {
                    "We are searching for motivated talents, that want to make fitness easier for everyone to enjoy!"
                  }
                </h2>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className="mt--70 mt_sm--20 mt_md--30">
          {hire.map((service) => (
            <Col xs={12} md={6} lg={4} key={service.id}>
              <IconBoxItem
                data={service}
                border={true}
                padding={true}
                showBtn={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HiringInfo;
