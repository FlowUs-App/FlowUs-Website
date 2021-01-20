import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CounterItem from "./CounterItem";

function Numbers() {
  return (
    <div className="bk-number-speaks section-ptb-100">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="number-speaks-wrapper">
              <div className="content wow move-up">
                <div className="title--creative text-left">
                  <h3 className="heading">NUMBER SPEAKS</h3>
                  <h2>
                    Always ready <br /> for{" "}
                    <span className="theme-creative">a challenge.</span>
                  </h2>
                  <p>
                    Nothing is more important than having a <br /> desire deep
                    down to achieve goals.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} className={"mt_md--40 mt_sm--40"}>
            <div className="speakers-number-wrap counter-grid">
              <CounterItem
                count={2034}
                title={"Unique designs"}
                iconClass={"ion-ios-eye-outline"}
              />

              <CounterItem
                count={1234}
                title={"Completed Projects"}
                iconClass={"ion-ios-filing-outline"}
              />

              <CounterItem
                count={4585}
                title={"Global Partners"}
                iconClass={"ion-ios-home-outline"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Numbers;
