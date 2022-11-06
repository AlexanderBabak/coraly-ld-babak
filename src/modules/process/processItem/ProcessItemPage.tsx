import React from "react";
import { PaginationBar } from "./pagination/Pagination";
import { ProcessItemTable } from "./table/Table";
import { ToolbarStyled } from "./toolbar/Toolbar";

export const ProcessItemPage = () => {
  return (
    <>
      <ToolbarStyled />
      <PaginationBar />
      <ProcessItemTable />
    </>
  );
};
