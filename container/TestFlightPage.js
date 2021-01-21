import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DefaultLayout from "../layout/DefaultLayout";

function TestFlightPage() {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>{"FlowUs TestFlight Page"}</title>
        </Helmet>
        <DefaultLayout
          className="template-color-2 template-font-3 bg_color--4"
          revealFooter={true}
        >
          <Header />
          <div className="eatPage centerThis">
            <h1 className="section-title text-center textColorWhite centerMe">
              Coming soon
            </h1>
          </div>
          <ContactUs />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default TestFlightPage;
