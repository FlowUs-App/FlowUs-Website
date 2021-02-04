import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DefaultLayout from "../layout/DefaultLayout";
import Confetti from "react-confetti";
import useWindowSize from "../utils/useWindow";

function TestFlightPage() {
  const size = useWindowSize();
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
          <Confetti
            width={size.width}
            height={size.height}
            colors={["#00bcd4", "#000ed4", "#6198ff", "#164269", "#94c2e9"]}
            numberOfPieces={2000}
            tweenDuration={12000}
            recycle={false}
          />
          <Header />
          <div className="eatPage centerThis">
            <a
              href="https://testflight.apple.com/join/XA8bLv0r"
              className="centerThis testText"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="section-title text-center textColorWhite centerMe">
                Start Testing <span className="lightBlueTextColor">Now</span>
              </h1>
            </a>
          </div>
          <ContactUs />
        </DefaultLayout>
        <Footer />
      </Fragment>
    </>
  );
}

export default TestFlightPage;
