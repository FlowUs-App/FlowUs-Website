import React from "react";

function IconBoxItem({ data, border, padding, iconType, className, showBtn }) {
  return (
    <div
      className={`${className} icon-box mt--30 text-center ${
        border ? "" : "no-border"
      } ${!border && padding ? "with-padding" : ""}`}
    >
      <div className="inner">
        <div className="icon">
          {iconType === "img" ? (
            <img src={require("/" + data.icon)} alt={data.title} />
          ) : (
            <i className={data.iconClass} />
          )}
        </div>
        <div className="content">
          <h5 className="heading heading-h5">{data.title}</h5>
          <p className="bk_pra">{data.content}</p>
          {showBtn ? (
            <a className="icon-btn" href={"/hiring#contact"}>
              <span>{"Apply for " + data.title}</span>
              <i className="fa fa-arrow-right" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default IconBoxItem;
