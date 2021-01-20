import React from "react";

function HeaderConfig() {
  const body = document.querySelector("body");
  const html = document.querySelector("html");

  const searchHandler = () => {
    body.classList.add("page-search-popup-opened");
    html.style.overflow = "hidden";
  };

  const mobileMenuHandler = () => {
    body.classList.add("popup-mobile-menu-wrapper");
    html.style.overflow = "hidden";
  };

  return (
    <div className="header-right have-not-flex pl--35 pl_md--5 pl_sm--5">
      <div className="popup-search-wrap">
        <button
          className="btn-search-click"
          onClick={() => {
            searchHandler();
          }}
        >
          <i className="fa fa-search" />
        </button>
      </div>

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
