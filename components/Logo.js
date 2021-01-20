import React from "react";
import Link from "next/link";

function Logo({ logo }) {
  return (
    <div className="logo">
      <Link href={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
