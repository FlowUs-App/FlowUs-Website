import React, { useEffect, useState } from "react";

function HeaderConfig() {
  const [body, setBody] = useState();
  const [html, setHTML] = useState();
  useEffect(() => {
    setBody(document.querySelector("body"));
    setHTML(document.querySelector("html"));
  }, []);

  const mobileMenuHandler = () => {
    body.classList.add("popup-mobile-menu-wrapper");
    html.style.overflow = "hidden";
  };

  return (
    <div className="header-right have-not-flex pl--35 pl_md--5 pl_sm--5">
      <div className="menu-hamburger popup-mobile-click light-version d-block d-lg-none">
        <div
          onClick={() => {
            mobileMenuHandler();
          }}
        >
          <i />
        </div>
      </div>
    </div>
  );
}

export default HeaderConfig;
