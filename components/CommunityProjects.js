import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import SliderSwiper from "./Swiper";
import projects from "../data/projects.json";
import CommunityProjectItem from "./CommunityProjectItem";

function CommunityProjects() {
  const settings = {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "custom",
      renderCustom: (swiper, current, total) => {
        let a = ((100 / total) * current).toFixed(6);
        let n = current.toString();
        let s = total.toString();
        return `<div class="fraction"><span class="current">${(n = n.padStart(
          2,
          "0"
        ))}</span><span class="separator"> / </span><span class="total">${(s = s.padStart(
          2,
          "0"
        ))}</span></div><div class="progressbar"><div class="filled" data-width="${a}" style="width: ${a}%"></div></div>`;
      },
    },
  };

  return (
    <div className="bk-portfolio-area creative-portfolio section-pb-100">
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle
              title={"Featured <span class='gradientFlow'>Projects</span>"}
              btnText={"View all projects"}
              btnLink={"/"}
            />
          </Col>
        </Row>
      </Container>

      <div className="portfolio-wrapper mt--40 wow move-up">
        <Container>
          <Row>
            <Col xs={12}>
              <div>
                <SliderSwiper
                  settings={settings}
                  containerClass={"porfolio-swip-horizontal overflow-hidden"}
                  wrapperClass={"swiper-wrapper"}
                >
                  {projects.map((project) => (
                    <CommunityProjectItem
                      key={project.id}
                      title={project.title}
                      thumb={"./portfolio-2/" + project.thumb}
                      className={"swiper-slide"}
                    />
                  ))}
                </SliderSwiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CommunityProjects;
