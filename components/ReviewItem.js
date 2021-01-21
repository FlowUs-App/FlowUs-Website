import React from "react";

function ReviewItem({ data }) {
  return (
    <div className="testimonial-nav">
      <div className="content">
        <p>{data.quote}</p>

        <div className="testimonial-info">
          <div className="client-info">
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <h6 className="hoverLink">{data.client.name}</h6>
            </a>{" "}
            <span> - {data.client.designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
