import React from "react";
import Link from "next/link";
import navbarData from "../data/navbar.json";

function NavbarItem() {
  return navbarData.map((navbar) => (
    <li key={navbar.id} className={"label-1"}>
      <a href={navbar.link}>
        <span className="hoverAnim">{navbar.title}</span>
      </a>
    </li>
  ));
}

export default NavbarItem;
