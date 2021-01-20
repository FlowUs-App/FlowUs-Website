import React, { useEffect, useState } from "react";

function PageContainer({ children, className, revealFooter }) {
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    if (revealFooter) {
      const pageFooter = document.querySelector("footer");
      const footerHeight = pageFooter.offsetHeight;
      setFooterHeight(footerHeight);
    }
  }, [revealFooter]);

  return (
    <div
      className={`wrapper ${revealFooter ? "all-wrapper" : ""} ${className}`}
      id="wrapper"
      style={{ marginBottom: revealFooter && footerHeight }}
    >
      {children}
    </div>
  );
}

export default PageContainer;
