import React from "react";
import PagesList from "./PagesList";
import Page from "./Page";
function Pages() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <PagesList />
      <Page />
    </div>
  );
}

export default Pages;
