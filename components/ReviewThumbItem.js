import React from "react";

function ReviewThumbItem({ data }) {
  return (
    <div className="client-thumb">
      <picture>
        <source
          srcset={"/client-3/" + data.client.photo + ".jpg"}
          type={"/client-3/" + data.client.photo + ".jpg"}
          alt={data.client.name}
        />
        <img
          src={"/client-3/" + data.client.photo + ".webp"}
          type={data.client.photo + ".webp"}
          alt={data.client.name}
        />
      </picture>
    </div>
  );
}

export default ReviewThumbItem;
