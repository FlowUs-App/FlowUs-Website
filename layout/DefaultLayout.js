import React from "react";
import PageContainer from "../components/PageContainer";
import PopupMobileMenu from "../components/PopupMobileMenu";

function DefaultLayout({ children, className, revealFooter }) {
  return (
    <PageContainer className={className} revealFooter={revealFooter}>
      <PopupMobileMenu />
      {children}
    </PageContainer>
  );
}

export default DefaultLayout;
