import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import reviews from "../data/reviews.json";
import ReviewItem from "./ReviewItem";
import ReviewThumbItem from "./ReviewThumbItem";

function Reviews() {
  const [thumbnailNav, setThumbnailNav] = useState(null);
  const [quoteNav, setQuoteNav] = useState(null);
  let thumbnailSlider = useRef(null);
  let quoteSlider = useRef(null);

  useEffect(() => {
    setThumbnailNav(thumbnailSlider);
    setQuoteNav(quoteSlider);
  }, [thumbnailSlider, quoteSlider]);

  const NextArrow = ({ className, onClick }) => {
    return (
      <button className={`slick-btn ${className}`} onClick={onClick}>
        <i className="fa fa-angle-right textColorWhite" />
      </button>
    );
  };

  const PrevArrow = ({ className, onClick }) => {
    return (
      <button className={`slick-btn ${className}`} onClick={onClick}>
        <i className="fa fa-angle-left textColorWhite" />
      </button>
    );
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    asNavFor: thumbnailNav,
  };

  const thumbSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: quoteNav,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--60 slick-arrow-hover"
      style={{
        backgroundImage: `url(/reviewBackground.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <div className="testimonial-wrapper testimonial-active--single--arrow">
              <div className="testimonial-container pb--60">
                <div className="testimonial testimonial--creative">
                  <Slider
                    {...thumbSettings}
                    ref={(slider) => {
                      thumbnailSlider = slider;
                    }}
                    className={
                      "brook-element-carousel nav-thumb testimonial-fixed-width testimonial-nav-style"
                    }
                  >
                    {reviews.map((review) => (
                      <ReviewThumbItem key={review.id} data={review} />
                    ))}
                  </Slider>

                  <Slider
                    {...settings}
                    ref={(slider) => {
                      quoteSlider = slider;
                    }}
                    className={
                      "brook-element-carousel nav-content slick-arrow-center slick-dots-bottom testimonial-nav-content"
                    }
                  >
                    {reviews.map((review) => (
                      <ReviewItem key={review.id} data={review} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
