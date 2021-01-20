import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SlickSlider from "./SlickSlider";
import teamMembers from "../data/teammember.json";
import TeamMemberItem from "./TeamMemberItem";

function TeamCarousel() {
  const NextArrow = ({ className, onClick }) => {
    return (
      <button className={`slick-btn ${className}`} onClick={onClick}>
        <i className="fa fa-angle-right" />
      </button>
    );
  };

  const PrevArrow = ({ className, onClick }) => {
    return (
      <button className={`slick-btn ${className}`} onClick={onClick}>
        <i className="fa fa-angle-left" />
      </button>
    );
  };

  const settings = {
    slidesToShow: 3,
    infinite: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="blackBG brook-team-area bg_color--1 mt--180 mt_sm--100">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="breadcrumb-inner text-center mb--100 mb_sm--60">
              <h1 className="textColorWhite heading heading-h1 line-height-1-5">
                The A-team of{" "}
                <span className="lightBlueTextColor">awesomeness</span>
                <br /> & creative people
              </h1>
            </div>

            <SlickSlider
              settings={settings}
              classes="brook-element-carousel slick-arrow-center slick-arrow-rounded"
            >
              {teamMembers.slice(0, 4).map((member) => (
                <TeamMemberItem key={member.id} data={member} />
              ))}
            </SlickSlider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamCarousel;
