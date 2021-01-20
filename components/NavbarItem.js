import React from "react";
import Link from "next/link";
import navbarData from "../data/navbar.json";

function NavbarItem() {
  return navbarData.map((navbar) => (
    <li key={navbar.id} className={"label-1"}>
      <Link href={navbar.link}>
        <span>{navbar.title}</span>
      </Link>
    </li>
  ));
}

export default NavbarItem;
