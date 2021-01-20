import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import DefaultLayout from "../layout/DefaultLayout";
import Footer from "../components/Footer";

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
        ></DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default LandingPage;
