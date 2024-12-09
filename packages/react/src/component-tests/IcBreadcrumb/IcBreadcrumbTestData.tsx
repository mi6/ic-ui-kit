import React, { ReactElement } from "react";
import { IcBreadcrumb, IcBreadcrumbGroup, IcButton } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
      fill="currentColor"
    />
  </SlottedSVG>
);

export const Default = (): ReactElement => {
  return (
    <IcBreadcrumbGroup style={{ margin: "16px" }}>
      <IcBreadcrumb pageTitle="Home" href="#" />
      <IcBreadcrumb pageTitle="Beverages" href="#" />
      <IcBreadcrumb pageTitle="Coffee" href="#" />
    </IcBreadcrumbGroup>
  );
};

export const BackBreadcrumb = (): ReactElement => {
  return (
    <IcBreadcrumbGroup backBreadcrumbOnly>
      <IcBreadcrumb pageTitle="Home" href="#" />
      <IcBreadcrumb pageTitle="Beverages" href="#" />
      <IcBreadcrumb current pageTitle="Coffee" href="#" />
    </IcBreadcrumbGroup>
  );
};

export const ToggleBackBreadcrumb = (): ReactElement => {
  const [backBreadcrumbOnly, setBackBreadcrumbOnly] = React.useState(false);
  const switchBackBreadCrumbOnly = () =>
    setBackBreadcrumbOnly((value) => !value);
  return (
    <div>
      <IcBreadcrumbGroup backBreadcrumbOnly={backBreadcrumbOnly}>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb current pageTitle="Coffee" href="#" />
      </IcBreadcrumbGroup>
      <IcButton onClick={switchBackBreadCrumbOnly}>Toggle</IcButton>
    </div>
  );
};

export const WithIcons = (): ReactElement => {
  return (
    <IcBreadcrumbGroup>
      <IcBreadcrumb pageTitle="Home" href="#">
        <ReusableSlottedIcon />
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="Beverages" href="#">
        <SlottedSVG
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"
            fill="currentColor"
          />
        </SlottedSVG>
      </IcBreadcrumb>
      <IcBreadcrumb pageTitle="Coffee" current href="#">
        <SlottedSVG
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4v-2z"
            fill="currentColor"
          />
        </SlottedSVG>
      </IcBreadcrumb>
    </IcBreadcrumbGroup>
  );
};

export const WithCurrentPage = (): ReactElement => {
  return (
    <IcBreadcrumbGroup style={{ margin: "16px" }}>
      <IcBreadcrumb pageTitle="Home" href="#" />
      <IcBreadcrumb pageTitle="Beverages" href="#" />
      <IcBreadcrumb current pageTitle="Coffee" href="#" />
    </IcBreadcrumbGroup>
  );
};

export const Collapsed = (): ReactElement => {
  return (
    <IcBreadcrumbGroup collapsed style={{ margin: "16px" }}>
      <IcBreadcrumb pageTitle="Home" href="#" />
      <IcBreadcrumb pageTitle="Beverages" href="#" />
      <IcBreadcrumb pageTitle="Coffee" current href="#" />
    </IcBreadcrumbGroup>
  );
};

export const ToggleCollapsed = (): ReactElement => {
  const [collapsed, setCollapsed] = React.useState(false);
  const switchCollapsed = () => setCollapsed((value) => !value);
  return (
    <div>
      <IcBreadcrumbGroup collapsed={collapsed} style={{ margin: "16px" }}>
        <IcBreadcrumb pageTitle="Home" href="#" />
        <IcBreadcrumb pageTitle="Beverages" href="#" />
        <IcBreadcrumb pageTitle="Coffee" current href="#" />
      </IcBreadcrumbGroup>
      <IcButton onClick={switchCollapsed}>Toggle</IcButton>
    </div>
  );
};

export const Appearance = (): ReactElement => {
  return (
    <div>
      <IcBreadcrumbGroup>
        <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
          <ReusableSlottedIcon />
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="Breadcrumb 2" current={true} href="/">
          <ReusableSlottedIcon />
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
      <IcBreadcrumbGroup backBreadcrumbOnly={true}>
        <IcBreadcrumb
          pageTitle="Breadcrumb 1"
          href="/breadcrumb-1"
        ></IcBreadcrumb>
        <IcBreadcrumb
          current={true}
          pageTitle="Breadcrumb 2"
          href="/breadcrumb-2"
        ></IcBreadcrumb>
      </IcBreadcrumbGroup>
      <IcBreadcrumbGroup theme="light" monochrome={true}>
        <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
          <ReusableSlottedIcon />
        </IcBreadcrumb>
        <IcBreadcrumb pageTitle="Breadcrumb 2" current={true} href="/">
          <ReusableSlottedIcon />
        </IcBreadcrumb>
      </IcBreadcrumbGroup>
      <IcBreadcrumbGroup
        theme="light"
        monochrome={true}
        backBreadcrumbOnly={true}
      >
        <IcBreadcrumb
          pageTitle="Breadcrumb 1"
          href="/breadcrumb-1"
        ></IcBreadcrumb>
        <IcBreadcrumb
          current={true}
          pageTitle="Breadcrumb 2"
          href="/breadcrumb-2"
        ></IcBreadcrumb>
      </IcBreadcrumbGroup>
      <div style={{ backgroundColor: "black", width: "fit-content" }}>
        <IcBreadcrumbGroup theme="dark">
          <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
            <ReusableSlottedIcon />
          </IcBreadcrumb>
          <IcBreadcrumb pageTitle="Breadcrumb 2" current={true} href="/">
            <ReusableSlottedIcon />
          </IcBreadcrumb>
        </IcBreadcrumbGroup>
        <IcBreadcrumbGroup theme="dark" backBreadcrumbOnly={true}>
          <IcBreadcrumb
            pageTitle="Breadcrumb 1"
            href="/breadcrumb-1"
          ></IcBreadcrumb>
          <IcBreadcrumb
            current={true}
            pageTitle="Breadcrumb 2"
            href="/breadcrumb-2"
          ></IcBreadcrumb>
        </IcBreadcrumbGroup>
        <IcBreadcrumbGroup theme="dark" monochrome={true}>
          <IcBreadcrumb pageTitle="Breadcrumb 1" href="/breadcrumb-1">
            <ReusableSlottedIcon />
          </IcBreadcrumb>
          <IcBreadcrumb pageTitle="Breadcrumb 2" current={true} href="/">
            <ReusableSlottedIcon />
          </IcBreadcrumb>
        </IcBreadcrumbGroup>
        <IcBreadcrumbGroup
          theme="dark"
          monochrome={true}
          backBreadcrumbOnly={true}
        >
          <IcBreadcrumb
            pageTitle="Breadcrumb 1"
            href="/breadcrumb-1"
          ></IcBreadcrumb>
          <IcBreadcrumb
            current={true}
            pageTitle="Breadcrumb 2"
            href="/breadcrumb-2"
          ></IcBreadcrumb>
        </IcBreadcrumbGroup>
      </div>
    </div>
  );
};
