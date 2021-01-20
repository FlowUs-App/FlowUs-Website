import React from "react";
import Swiper from "react-id-swiper";

function SuperSwiper({
  children,
  settings,
  reference,
  containerClass,
  wrapperClass,
}) {
  return (
    <Swiper
      {...settings}
      getSwiper={reference && reference}
      containerClass={containerClass && containerClass}
      wrapperClass={wrapperClass && wrapperClass}
    >
      {children}
    </Swiper>
  );
}

export default SuperSwiper;
