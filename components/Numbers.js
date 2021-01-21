import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CounterItem from "./CounterItem";
import { Octokit } from "@octokit/core";

import initFirebase from "../utils/firebase";
import firebase from "firebase/app";

initFirebase();

function Numbers() {
  const db = firebase.firestore();
  const [tickets, setTickets] = useState(0);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  const getDocuments = async () => {
    const snapshot = await db.collection("launchtickets").get();
    setTickets(snapshot.docs.length);
    console.log(tickets);
  };

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
                    Current Metrics representing{" "}
                    <span className="lightBlueTextColor removeFancyStylings">
                      FlowUs
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7} className={"mt_md--40 mt_sm--40"}>
            <div className="speakers-number-wrap counter-grid">
              <CounterItem
                count={tickets}
                title={"Launch Tickets"}
                iconClass={"launchticket.svg"}
              />

              <CounterItem
                count={569}
                title={"Commits"}
                iconClass={"commits.svg"}
              />

              <CounterItem
                count={19.3}
                title={"Average Founder Age"}
                iconClass={"age.svg"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Numbers;
