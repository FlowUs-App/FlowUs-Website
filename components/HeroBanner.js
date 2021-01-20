import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PopupVideo from "../components/PopUpVideo";

function HeroBanner() {
  useEffect(() => {
    const heroContent = document.querySelector(".hero-banner-content");
    const animate = heroContent.querySelectorAll(".move-up");
    animate.forEach((elem, index) => {
      elem.classList.add("animated");
    });
  }, []);

  return (
    <div
      className="hero-banner-wrapper"
      style={{
        backgroundImage: "url('/slider-creative-agency-slide-01-bg.png')",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <div className="hero-banner-content">
              <PopupVideo
                videoId={"7e90gBu4pas"}
                gradient={true}
                gradientClass="color-pink"
              />
              <h2>
                Flow<span>Us</span>
              </h2>
              <img
                src={"/slider-creative-agency-slide-01-image-01.png"}
                alt="separator"
              />
              <p>
                Introducing the Fitness Social Media App for you and your
                friends.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <button className="mouse-icon animate">
        <img src={"/mouse-icon.png"} alt="mouse icon" />
      </button>
    </div>
  );
}

export default HeroBanner;
