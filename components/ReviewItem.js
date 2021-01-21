import React from "react";

function ReviewItem({ data }) {
  return (
    <div className="testimonial-nav">
      <div className="content">
        <p>{data.quote}</p>

        <div className="testimonial-info">
          <div className="client-info">
            <h6>{data.client.name}</h6>
            <span>- {data.client.designation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
