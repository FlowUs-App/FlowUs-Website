import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import HeaderConfig from "../config/HeaderConfig";

function Header() {
  return (
    <HeaderContainer logoVersion={"light"} transparent={true} sticky={true}>
      <div className="header">
        <Logo logo={"/logoweis.png"} />
      </div>

      <div className="header-flex-right flex-80">
        <Navbar />
        <HeaderConfig />
      </div>
    </HeaderContainer>
  );
}

export default Header;
