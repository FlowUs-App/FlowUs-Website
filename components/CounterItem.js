import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterItem({ iconClass, title, count }) {
  const [appear, setAppear] = useState(false);

  const visibleHandler = (isVisible) => {
    isVisible && setAppear(true);
  };

  return (
    <div className="counter-style--2 wow move-up">
      <div className="icon">
        <img src={"/service/" + iconClass} />
      </div>
      <VisibilitySensor onChange={(e) => visibleHandler(e)}>
        <span className="count">
          {title === "Average Founder" ? (
            <CountUp
              start={appear ? 0 : null}
              end={count}
              decimals={1}
              decimal="."
            />
          ) : (
            <CountUp start={appear ? 0 : null} end={count} />
          )}
        </span>
      </VisibilitySensor>
      <div className="content">
        <h6>{title}</h6>
      </div>
    </div>
  );
}

export default CounterItem;
