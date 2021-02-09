import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DefaultLayout from "../layout/DefaultLayout";
import LaunchTicketInfo from "../components/LaunchTicketInfo";
import ContactUs from "../components/ContactUs";

function HiringPage() {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>{"Apply for a job at FlowUs"}</title>
        </Helmet>
        <DefaultLayout
          className="template-color-2 template-font-3 bg_color--4"
          revealFooter={true}
        >
          <Header />
          <LaunchTicketInfo />
          <ContactUs />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default HiringPage;
