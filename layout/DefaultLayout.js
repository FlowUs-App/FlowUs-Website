import React from "react";
import PageContainer from "../components/PageContainer";
import PopupSearch from "../components/PopupSearch";
import PopupMobileMenu from "../components/PopupMobileMenu";

function DefaultLayout({ children, className, revealFooter }) {
  return (
    <PageContainer className={className} revealFooter={revealFooter}>
      <PopupSearch />
      <PopupMobileMenu />
      {children}
    </PageContainer>
  );
}

export default DefaultLayout;
