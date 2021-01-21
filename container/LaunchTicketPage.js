import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DefaultLayout from "../layout/DefaultLayout";
import LaunchTicketInfo from "../components/LaunchTicketInfo";
import Spacer from "../components/Spacer";

function LaunchTicketPage() {
  return (
    <>
      <Fragment>
        <Helmet>
          <title>{"Get your FlowUs Launchticket"}</title>
        </Helmet>
        <DefaultLayout
          className="template-color-2 template-font-3 bg_color--4"
          revealFooter={true}
        >
          <Header />

          <LaunchTicketInfo />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default LaunchTicketPage;
