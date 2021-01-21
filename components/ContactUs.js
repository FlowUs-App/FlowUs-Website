import React from "react";
import Link from "next/link";

function ContactUs() {
  return (
    <div className="firefly brook-row-column-area clearfix">
      <div id="contact" className="aaa creative-gradient--1 ptb--150">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action call-to-action--1">
                <div className="content">
                  <h6>Have the time of your life</h6>
                  <h3>Ready to enjoy FlowUS ?</h3>
                  <Link href={"mailto:flowus.app@gmail.com"}>
                    <button className="contactButton">
                      <span>
                        Contact us <i className="fa fa-arrow-right" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
