import React from "react";

function AboutContent({ title, heading, content, btnText, btnLink }) {
  return (
    <div className="content pl--80 pl_md--5 pl_sm--5">
      <div className="title--creative wow move-up">
        <h3 className="heading">{title}</h3>
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      </div>
      <p className="wow move-up">{content}</p>
      <a className="about-btn wow move-up" href={`${btnLink}`}>
        <span>{btnText}</span>
        <i className="fa fa-arrow-right" />
      </a>
    </div>
  );
}

export default AboutContent;
