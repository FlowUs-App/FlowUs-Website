import React from "react";

function ReviewItem({ data }) {
  const Rating = () => {
    return (
      <li>
        <i className="fa fa-star" />
      </li>
    );
  };

  return (
    <div className="testimonial-nav">
      <div className="content">
        <p>{data.quote}</p>
        <ul className="rating d-flex justify-content-center">
          {((rows, i, len) => {
            while (i++ <= len) {
              rows.push(<Rating key={i} />);
            }
            return rows;
          })([], 1, data.ratings)}
        </ul>
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
