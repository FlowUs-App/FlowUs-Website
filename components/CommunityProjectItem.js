import React from "react";
import PropTypes from "prop-types";

function CommunityProjectItem({ title, thumb, category, className }) {
  return (
    <div className={`portfolio portfolio_style--2 mt--30 ${className}`}>
      <div className="thumb">
        <picture>
          <source srcset={thumb + ".jpg"} type={thumb + ".jpg"} />
          <img alt={title} src={thumb + ".webp"} type={thumb + ".webp"} />
        </picture>
      </div>
      <div className="portfolio-overlay" />
      <div className="port-overlay-info">
        <div className="content">
          <h3 className="port-title">{title}</h3>
          <div className="category">{category}</div>
        </div>
      </div>
    </div>
  );
}

CommunityProjectItem.propTypes = {
  className: PropTypes.string,
};

export default CommunityProjectItem;
