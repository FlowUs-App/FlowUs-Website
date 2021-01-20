import React from "react";

function ServiceItem({ thumb, content, title }) {
  return (
    <div className="service service--2">
      <div className="thumb">
        <img src={"/service/" + thumb} alt={title} />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
