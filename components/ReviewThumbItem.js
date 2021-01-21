import React from "react";

function ReviewThumbItem({ data }) {
  return (
    <div className="client-thumb">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img src={"/client-3/" + data.client.photo} alt={data.client.name} />
      </a>
    </div>
  );
}

export default ReviewThumbItem;
