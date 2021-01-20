import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../layout/DefaultLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import TeamCarousel from "../components/TeamCarousel";
import Service from "../components/Service";
import CommunityProjects from "../components/CommunityProjects";

function LandingPage() {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>{"FlowUs Landing Page"}</title>
        </Helmet>
        <DefaultLayout
          className="template-color-2 template-font-3 bg_color--4"
          revealFooter={true}
        >
          <Header />
          <HeroBanner />
          <TeamCarousel />
          <Service />
          <CommunityProjects />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default LandingPage;
