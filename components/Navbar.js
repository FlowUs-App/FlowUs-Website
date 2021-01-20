import React from "react";
import NavbarItem from "../components/NavbarItem";

function Navbar({ className }) {
  return (
    <div
      className={`mainmenu-wrapper d-none d-lg-block ${
        className ? className : ""
      }`}
    >
      <nav className="page_nav">
        <ul className="mainmenu">
          <NavbarItem />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
