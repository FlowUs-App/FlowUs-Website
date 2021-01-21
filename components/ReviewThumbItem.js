import React from "react";

function ReviewThumbItem({ data }) {
  return (
    <div className="client-thumb">
      <img src={"/client-3/" + data.client.photo} alt={data.client.name} />
    </div>
  );
}

export default ReviewThumbItem;
