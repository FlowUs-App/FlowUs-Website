import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import Link from "next/link";

function PopupMobileMenu() {
  const [menuData] = useState(require("../data/navbar.json"));
  const router = useRouter();
  const closeMobileMenu = () => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    body.classList.remove("popup-mobile-menu-wrapper");
    html.style.overflow = "auto";
  };

  useEffect(() => {
    const responsiveMenu = () => {
      const navWrapper = document.querySelector(".object-custom-menu");
      const hasMegaMenu = document.querySelectorAll(".has-mega-menu");
      const navSubMenus = navWrapper.querySelectorAll(".object-submenu");

      navSubMenus.forEach((navSubMenu, index) => {
        navSubMenu.style.display = "none";
      });

      hasMegaMenu.forEach((hasSubMenuAnchor, index) => {
        hasSubMenuAnchor.firstChild.addEventListener("click", (e) => {
          e.preventDefault();
          if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
          } else {
            e.target.classList.add("active");
          }
          let subMenus = e.target.parentNode.querySelectorAll("ul");
          subMenus.forEach((subMenu, index) => {
            if (subMenu.style.display === "none") {
              subMenu.style.display = "block";
            } else {
              subMenu.style.display = "none";
            }
            let anchors = subMenu.querySelectorAll("a");
            anchors.forEach((anchor, index) => {
              anchor.addEventListener("click", () => closeMobileMenu());
            });
          });
        });
      });
    };
    responsiveMenu();
  }, []);

  return (
    <div className="popup-mobile-menu popup-mobile-visible">
      <div
        className="overlay"
        onClick={() => {
          closeMobileMenu();
        }}
      />
      <div className="inner">
        <div className="mobileheader">
          <Logo logo={"/logoweis.png"} />
          <button
            onClick={() => {
              closeMobileMenu();
            }}
            className="mobile-close"
          />
        </div>
        <div className="menu-content">
          <ul className="menulist object-custom-menu">
            {menuData.map((menuItem) => (
              <li
                key={menuItem.id}
                className={
                  menuItem.megaMenu || menuItem.subMenu ? "has-mega-menu" : ""
                }
              >
                <Link href={menuItem.link}>
                  <span>{menuItem.title}</span>
                </Link>

                {menuItem.subMenu ? (
                  <ul className="object-submenu mt-0">
                    {menuItem.subMenu.lists.map((subItem) => (
                      <li key={subItem.id}>
                        <Link href={subItem.link}>
                          <span>{subItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {menuItem.megaMenu
                  ? menuItem.megaMenu.map((megaItem) => (
                      <ul key={megaItem.id} className="object-submenu">
                        <li className="title">{megaItem.megaTitle}</li>
                        {megaItem.lists.map((list) => (
                          <li key={list.id}>
                            <Link href={list.link}>
                              <span>{list.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))
                  : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopupMobileMenu;
