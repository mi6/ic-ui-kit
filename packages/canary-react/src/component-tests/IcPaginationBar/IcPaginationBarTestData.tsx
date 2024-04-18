import React from "react";
import { IcPaginationBar } from "../../components";

export const PaginationBarItemsPerPage = (props) => (
  <IcPaginationBar
    totalItems={100}
    showItemsPerPageControl
    itemsPerPageOptions={[
      { value: "10", label: "10" },
      { value: "20", label: "20" },
    ]}
    {...props}
  />
);
