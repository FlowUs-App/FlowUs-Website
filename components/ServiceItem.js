import React from "react";
import PropTypes from "prop-types";

function ServiceItem({ data }) {
  return (
    <div className="service service--2">
      <div className="thumb">
        <img src={"./service/" + data.thumb} alt={data.title} />
      </div>
      <div className="content">
        <h4>{data.title}</h4>
        <p>{data.content}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
