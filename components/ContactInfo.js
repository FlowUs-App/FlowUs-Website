import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import socials from "../data/socials.json";

const data = [
  {
    id: 2,
    title: "Message us",
    content: "flowus.app@gmail.com",
  },
];

function ContactInfo() {
  return (
    <div className="bk_contact_classic bg_color--1 ptb--160 ptb-md--80 ptb-sm--80">
      <Container>
        <Row>
          {data.map((item) => (
            <Col key={item.id} xs={6} className="wow move-up">
              <div className="classic-address text-center">
                <h4 className="heading heading-h4">{item.title}</h4>
                <div className="desc mt--15">
                  <p
                    className="bk_pra line-height-2-22"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </Col>
          ))}
          <Col xs={6} className="wow move-up">
            <div className="classic-address text-center">
              <h4 className="heading heading-h4">Follow Us</h4>
              <div className="desc mt--15">
                <ul className="social-icon icon-solid-rounded icon-size-medium text-center move-up wow">
                  {socials.map((social) => (
                    <li key={social.id} className={social.media}>
                      <a
                        href={`https://${social.media}.com/${social.username}`}
                      >
                        <i className={`fa fa-${social.media}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactInfo;
