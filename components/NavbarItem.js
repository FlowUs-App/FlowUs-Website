import React from "react";
import Link from "next/link";
import navbarData from "../data/navbar.json";

function NavbarItem() {
  return navbarData.map((navbar) => (
    <li
      key={navbar.id}
      className={`label-1 ${
        navbar.megaMenu || navbar.subMenu ? "with--drop" : ""
      } ${navbar.megaMenu ? "slide--megamenu" : ""} ${
        navbar.subMenu ? "slide-dropdown" : ""
      }`}
    >
      <Link href={navbar.link}>
        <span>{navbar.title}</span>
      </Link>
      {navbar.subMenu ? (
        <ul className="dropdown__menu">
          {navbar.subMenu.lists.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.link}>
                <span>{subItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {navbar.megaMenu ? (
        <div className="mega__width--fullscreen">
          <div className="container">
            <div className="row">
              {navbar.megaMenu.map((megaItem) => (
                <div key={megaItem.id} className="col-lg-3">
                  <ul className="mega__list">
                    <li className="mega--title">{megaItem.megaTitle}</li>

                    {megaItem.lists.map((list) => (
                      <li key={list.id}>
                        <Link href={list.link}>
                          <span>{list.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </li>
  ));
}

export default NavbarItem;
