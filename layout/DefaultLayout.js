import React from "react";

function DefaultLayout({ children, className, revealFooter }) {
  return (
    <PageContainer className={className} revealFooter={revealFooter}>
      {children}
    </PageContainer>
  );
}

export default DefaultLayout;
