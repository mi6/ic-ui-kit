import React, { useState } from "react";
import { IcPaginationBar } from "../../components";
import { IcButton } from "@ukic/react";

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

export const PaginationBarItemsPerPageWithButtons = (props) => {
  const [totalItems, setTotalItems] = useState(100);
  const handleSetTotalItems = (value: number) => {
    setTotalItems(value);
  };
  return (
    <>
      <IcPaginationBar
        totalItems={totalItems}
        showItemsPerPageControl
        itemsPerPageOptions={[
          { value: "10", label: "10" },
          { value: "20", label: "20" },
        ]}
        {...props}
      />
      <IcButton className="set-5" onClick={() => handleSetTotalItems(5)}>
        Set to 5
      </IcButton>
      <IcButton className="set-30" onClick={() => handleSetTotalItems(30)}>
        Set to 30
      </IcButton>
    </>
  );
};
