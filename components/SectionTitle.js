import React from "react";

function SectionTitle({ title, btnText, btnLink }) {
  return (
    <div className="section-title--between wow move-up">
      <div className="title">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="section-btn mt_mobile--30">
        <a className="button-text" href={`${process.env.PUBLIC_URL + btnLink}`}>
          <span>{btnText}</span>
          <i className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default SectionTitle;
