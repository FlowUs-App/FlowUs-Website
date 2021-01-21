import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Copyright from "../components/Copyright";
import NewsletterForm from "../components/NewsLetterForm";

function Footer() {
  return (
    <div id="footer">
      <footer
        id="page-footer-wrapper"
        className="page-footer-wrapper page-footer bg_color--4 fixed-footer"
      >
        <div className="copyright copyright--2 plr_sm--30">
          <Container className="ptb--40">
            <Row className="align-items-center">
              <Col
                xs={{ span: 12, order: "last" }}
                md={{ span: 6, order: "first" }}
              >
                <div className="copyright-left text-md-left text-center mt-4 mt-md-0">
                  <Copyright />
                </div>
              </Col>

              <Col
                xs={{ span: 12, order: "first" }}
                md={{ span: 6, order: "last" }}
              >
                <div className="copyright-right">
                  <NewsletterForm />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
