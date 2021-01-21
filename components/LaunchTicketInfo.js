import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutThumb from "./AboutThumb";
import AboutContent from "./AboutContent";

function LaunchTicketInfo() {
  return (
    <div className="bk-about-area section-ptb-100">
      <Container>
        <Row className="about--creative align-items-center">
          <Col xs={12} lg={6}>
            <AboutThumb thumb={"/skate.webp"} />
          </Col>

          <Col xs={12} lg={6} className="mt_md--40 mt_sm--40">
            <AboutContent
              title={"LaunchTicket"}
              heading={
                "Register <span class='gradientFlow removeFancyStylings'>now!</span>"
              }
              content={
                "The first 100 people who sign up, will receive a prototype launch ticket. You can help to create the best app on the market by giving your feedback and voting for the best features."
              }
              btnText={"Register"}
              btnLink={"#footer"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LaunchTicketInfo;
